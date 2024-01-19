const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getCurrentDate() {  
  const t = new Date();
  const date = ("0" + t.getDate()).slice(-2);
  const month = ("0" + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  return `${date}/${month}/${year}`;
}

// const reponses = new Schema({
//   reponse: {
//     type: String,
//     required: true,
//   },
// })


const answer = new Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "questionACM",
  },
  reponse:[String]
});

const PaperSchema = new Schema({
  questionnaire: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "questionnaire",
  },
  eleve: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "eleve",
  },
  date: {
    type: String,
    default: getCurrentDate(),
  },
  status: {
    type: String,
    default: "start",
  },
  lsitofanswers: [answer],
});

const Paper = mongoose.model("paper", PaperSchema);

module.exports = Paper;
