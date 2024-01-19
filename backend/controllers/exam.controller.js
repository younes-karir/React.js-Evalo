const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Exam = require("../models/exam.model");
const User = require("../models/user.model");
const Question = require("../models/questionACM.modal");



// @desc     get all exams from database
// @route    GET  exams/
// @access   private
const getAll = asyncHandler(async (req, res) => {
  try {
    const Exams = await Exam.find({ user: req.user._id }).select("-user");
    const list = await Question.find();

    const GetQuestionsNumber = (id) => {
      const NewList = list.filter((item) => item.exam.toString() === id);
      return NewList.length;
    };
    const List = Exams.map((item) => {
      const number = GetQuestionsNumber(item._id.toString());
      return {
        _id:item._id,
        titre: item.titre,
        matiere: item.matiere,
        date: item.date,
        qstnumber: number,
      };
    });
    res.json(List);
  } catch (err) {
    res.send(err);
  }
});

// @desc     set new exam
// @route    POST  exams/
// @access   private
const setExam = asyncHandler(async (req, res) => {
  const item = new Exam({
    user: req.user._id,
    titre: req.body.titre,
    matiere: req.body.matiere,
    date: req.body.date,
  });
  try {
    const test = await item.save();
    res.json(test["_id"]);
  } catch (error) {
    res.status(400).json(error);
  }
});

// @desc     remove exam
// @route    DELETE  exams/
// @access   private
const removeExam = asyncHandler(async (req, res) => {
  const exam = await Exam.findById(req.params.id);
  const question = await Question.find({exam:req.params.id});
  if (!exam) {
    res.status(400);
    throw new Error("cet exam n'existe pas");
  }

  const user = await User.findById(req.user.id);

  // check for user
  if (!user) {
    res.status(401);
    throw new Error("l'utilisateur n'existe pas");
  }

  // make sur the user own the exam
  if (exam.user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error("l'utilisatur n'est pas authorise");
  } else {
    if(question.length > 0){
      await question.map(item => item.remove());
    }
      
    await exam.remove();
    res.json("removed");
  }
});

// @desc     update exam
// @route    PUT  exams/
// @access   private
const updatexam = asyncHandler(async (req, res) => {
  const exam = await Exam.findById(req.params.id);
  if (!exam) {
    res.status(400);
    throw new Error("c'exam n'existe pas");
  }

  const user = await User.findById(req.user.id);

  // check for user
  if (!user) {
    res.status(401);
    throw new Error("l'utilisateur n'existe pas");
  }

  // make sur the user own the exam
  if (exam.user.toString() !== user._id) {
    res.status(401);
    throw new Error("l'utilisatur n'est pas authorise");
  }
});

// @desc     get all exams from database
// @route    GET  exams/
// @access   private
const getLast = asyncHandler(async (req, res) => {
  try {
    const exam = await Exam.find({ user: req.user._id })
      .sort({ _id: -1 })
      .limit(1)
      .select("-user");

    res.json(exam[0]);
  } catch (err) {
    res.send(err);
  }
});


const getByID = asyncHandler(async (req, res) => {
  try {
    const exam = await Exam.findById(req.body.id);

    res.json(exam);
  } catch (err) {
    res.send(err);
  }
});

module.exports = {
  getAll,
  setExam,
  removeExam,
  updatexam,
  getLast,
  getByID,
};
