const mongoose = require("mongoose");

const Schema = mongoose.Schema;

function getCurrentDate() {
  const t = new Date();
  const date = ("0" + t.getDate()).slice(-2);
  const month = ("0" + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  return `${date}/${month}/${year}`;
}

const ExamSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  titre: {
    type: String,
    required: true,
  },
  matiere: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: getCurrentDate(),
  },
});

const Exam = mongoose.model("exam", ExamSchema);

module.exports = Exam;
