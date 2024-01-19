const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Paper = require("../models/paper.model");

// @desc     get all papers from database
// @route    GET papers/
// @access   private
const getAll = asyncHandler(async (req, res) => {
  res.json("welcome");
});

// @desc     Set  paper in database
// @route    POST papers/
// @access   private
const setPaper = asyncHandler(async (req, res) => {
  const paper = new Paper({
    questionnaire: req.body.questionnaire,
    eleve: req.body.eleve,
    lsitofanswers:req.body.lsitofanswers,
    status: "finish",
  });

  paper.save();

  res.json(true);
});

module.exports = {
  getAll,
  setPaper,
};
