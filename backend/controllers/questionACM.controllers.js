const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const Exam = require("../models/exam.model");
const Question = require("../models/questionACM.modal");

const AddQuestion = asyncHandler(async (req, res) => {
  const exam = await Exam.findById(req.body.exam);
  const question = new Question({
    exam: req.body.exam,
    title: req.body.title,
    note: req.body.note,
    items: [],
  });
  await req.body.items.map((item) =>
    question.items.push({
      title: item.title,
      correct: item.correct,
    })
  );

  question.save();
  res.json(question);
});

const GetQuestions = asyncHandler(async (req, res) => {
  const list = await Question.find({ exam: req.body.id }).select("-exam");
  res.json(list);
});




// @desc     remove question
// @route    DELETE  questions/
// @access   private
const RemoveQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id);
  await question.remove();
  res.json(question);
});

module.exports = {
  AddQuestion,
  GetQuestions,
  RemoveQuestion,
};
