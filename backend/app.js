require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const bodyParser = require("body-parser");
const config = require("./db");


const users = require("./routes/user.routes");
const exams = require("./routes/exam.routes");
const questions = require("./routes/questionACM.routes");
const classes = require("./routes/class.routes");
const eleves = require("./routes/eleve.routes");
const questionnaire = require("./routes/questionnaire.routes");
const papers = require("./routes/paper.routes");


mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options('*',cors());

app.use("/users", users);
app.use("/exams", exams);
app.use("/questions", questions);
app.use("/classes",classes);
app.use("/eleves",eleves);
app.use("/questionnaire",questionnaire);
app.use("/papers",papers);


const PORT = process.env.PORT || process.env.JWT_SECRET;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
