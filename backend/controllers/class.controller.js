const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Class = require("../models/class.model");
const Eleve  =  require("../models/eleve.modal");

// @desc     get all exams from database
// @route    GET  exams/
// @access   private 
const getAll = asyncHandler(async (req, res) => {
  try {
    const Classes = await Class.find({ user: req.user._id }).select("-user");
    const list = await Eleve.find();
    
    const GetElevesNumber = (id) => {
      const NewList = list.filter((item) => item.class.toString() === id);
      return NewList.length;
    };
    
    const List =  Classes.map((item) => {
      const number = GetElevesNumber(item._id.toString());
      return {
        _id:item._id,
        nom:item.nom,
        niveau: item.niveau,
        anneescolaire:item.anneescolaire,
        elevenumber:number
      };
    });
    
    res.json(List);
  } catch (err) {
    res.send(err);
  }
});

const setClass = asyncHandler(async (req, res) => {
  const item = new Class({
    user: req.user._id,
    nom: req.body.nom,
    niveau: req.body.niveau,
    anneescolaire: req.body.anneescolaire
  });
  try {
    const test = await item.save();
    res.json(test["_id"]);
  } catch (error) {
    res.status(400).json(error);
  }
});

// @desc     remove class
// @route    DELETE  classes/
// @access   private
const RemoveClass= asyncHandler(async (req, res) => {
  const question = await Class.findById(req.params.id);
  await question.remove();
  res.json(question);
});



// @desc     get last
// @route    GET  exams/
// @access   private
const getLast = asyncHandler(async (req, res) => {
  try {
    const last = await Class.find({ user: req.user._id })
      .sort({ _id: -1 })
      .limit(1)
      .select("-user");

    res.json(last[0]);
  } catch (err) {
    res.send(err);
  }
});


module.exports = {
  getAll,
  setClass,
  RemoveClass,
  getLast,
};


