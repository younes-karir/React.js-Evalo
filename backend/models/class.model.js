const mongoose = require("mongoose");

const Schema = mongoose.Schema;

function getCurrentDate() {
    const t = new Date();
    const year = t.getFullYear();
    return `${year}-${year+1}`;
  }


const ClassSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  nom: {
    type: String,
    required: true,
  },
  niveau: {
    type: String,
    required: true,
  },
  anneescolaire: {
    type: String,
    default: getCurrentDate(),
  },
});

const Class = mongoose.model("class", ClassSchema);

module.exports = Class;


