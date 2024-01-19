const asyncHandler = require("express-async-handler");
const Eleve = require("../models/eleve.modal");

const GetAll = asyncHandler(async (req, res) => {
  const list = await Eleve.find({ class: req.body.id }).select("-class");
  res.json(list);
});

// @desc     set new eleve
// @route    POST  users/
// @access   private
const setEleve = asyncHandler(async (req, res) => {
  const item = new Eleve({
    cne: req.body.cne,
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    phone: req.body.phone,
    genre: req.body.genre,
    class: req.body.class,
  });
  try {
    const test = await item.save();
    res.json(test["_id"]);
  } catch (error) {
    res.status(400).json(error);
  }
});

// @desc     remove eleve
// @route    DELETE  eleves/
// @access   private
const RemoveEleve = asyncHandler(async (req, res) => {
  const eleve = await Eleve.findById(req.params.id);
  await eleve.remove();
  res.json(eleve);
});

module.exports = {
  GetAll,
  setEleve,
  RemoveEleve,
};
