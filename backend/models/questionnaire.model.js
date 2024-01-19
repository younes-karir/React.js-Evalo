const mongoose = require("mongoose");
const Schema = mongoose.Schema;


function getCurrentDate() {
    const t = new Date();
    const date = ("0" + t.getDate()).slice(-2);
    const month = ("0" + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    return `${date}/${month}/${year}`;
  }
  


const QuestionnaireSchema = new Schema({
  code : {
    type:String,
    required:true
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "class",
  },
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "exam",
  },
  date: {
    type: String,
    default: getCurrentDate(),
  },
  duree: {
    type: Number ,
    required: true,
  }
});

const Questionnaire = mongoose.model("questionnaire", QuestionnaireSchema);

module.exports = Questionnaire;