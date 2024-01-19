const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const Class = require("../models/class.model");
const Eleve = require("../models/eleve.modal");
const Exam = require("../models/exam.model");
const User = require("../models/user.model");
const Questionnaire = require("../models/questionnaire.model");
const { EmailBody } = require("./Helpers/EmailBody");

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendEmail = (data) => {
  let mailoptions = {
    from: process.env.EMAIL,
    to: data.destination,
    subject: data.objet,
    html: data.template,
  };

  transporter.sendMail(mailoptions, (err, data) => {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
};

function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const ObjectGenerate = (data) => {
  return "EVALO: invitaion";
};

const Generate = (data) => {
  return EmailBody(data);
};

// @desc     start questionnaire
// @route    POST  questionnaire/
// @access   private
const setQst = asyncHandler(async (req, res) => {
  const exam = await Exam.findById(req.body.exam);
  const ListOfEleves = await Eleve.find({ class: req.body.class });
  const user = await User.findById(req.user._id);
  const code = generateString(5);

  ListOfEleves.map((item) => {
    const options = {
      destination: item.email,
      objet: ObjectGenerate(user.fname + " " + user.lname),
      template: Generate({
        elevename: item.prenom,
        code: code,
      }),
    };
    sendEmail(options);
  });

  const Qst = new Questionnaire({
    code: code,
    exam: req.body.exam,
    class: req.body.class,
    duree: req.body.duree,
  });
  const insered = Qst.save();
  res.json(insered);
});

// @desc     Assgin Exam
// @route    POST  questionnaire/assign
// @access   public
const QstAssign = asyncHandler(async (req, res) => {
  const ListOfEleves = await Eleve.find();
  const email = req.body.email;
  const code = req.body.code;

  if (email.length === 0) {
    res.status(400);
    res.json("Email est vide");
  } else if (code.length === 0) {
    res.status(400);
    res.json("Code d'activation est vide");
  } else {
    Questionnaire.findOne({ code })
      .then((Qst) => {
        if (Qst === null) {
          res.status(404);
          res.json("Cette questionnaire n'existe pas");
        } else {
          const eleve = ListOfEleves.filter(
            (item) =>
              item.email === email &&
              item.class.toString() === Qst.class.toString()
          )[0];
          if (eleve) {
            res.json({ questionnaire: Qst, eleve: eleve });
          } else {
            res.status(401);
            res.json("Non authorise");
          }
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
});

module.exports = {
  setQst,
  QstAssign,
};
