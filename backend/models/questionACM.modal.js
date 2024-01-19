const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = new Schema({
  title: {
    type: String,
    required: true,
  },
  correct: {
    type: Boolean,
    required: true,
  },
});

const Questions = new Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: Number,
    required: true,
  },
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "exam",
  },
  items: [item],
});

const Question = mongoose.model("questionACM", Questions);

module.exports = Question;
