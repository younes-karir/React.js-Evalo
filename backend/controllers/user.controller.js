const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

// validate the inputs
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// @desc     register nes user
// @route    POST  users/
// @access   public
const resgiterUser = asyncHandler(async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        email: "l'email existe déjà",
      });
    } else {
      const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error("There was an error", err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              console.error("There was an error", err);
            } else {
              newUser.password = hash;
              newUser.save().then((user) => {
                res.status(201).json({
                  _id: user.id,
                  fname: user.fname,
                  lname: user.lname,
                  email: user.email,
                  token: GenerateJWT(user._id),
                });
              });
            }
          });
        }
      });
    }
  });
});

// @desc     authenticate user
// @route    POST  users/login
// @access   public
const LoginUser = asyncHandler(async (req, res) => {
  

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "Utilisateur non trouvé";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        res.status(201).json({
          _id: user.id,
          fname: user.fname,
          lname: user.lname,
          email: user.email,
          token: GenerateJWT(user._id),
        });
      } else {
        errors.password = "Mot de passe incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @desc     get user data
// @route    GET  users/me
// @access   private
const getMe = asyncHandler(async (req, res) => {
  const {_id,fname,lname,email} = await User.findById(req.user._id);
  res.status(200).json({
    id:_id,
    fname,
    lname,
    email
  })
});

// generate the web token
const GenerateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = {
  resgiterUser,
  LoginUser,
  getMe,
};
