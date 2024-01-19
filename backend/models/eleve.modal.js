const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const ElevS = new Schema({
  cne: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "class",
  }
});

const Eleve = mongoose.model("eleve", ElevS);

module.exports = Eleve;