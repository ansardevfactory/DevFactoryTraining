const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

app.post("/addition", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.send("Hello world");
});

app.post("/subtraction", (req, res) => {
  var firstNumber = req.body.numone;
  var secondNumber = req.body.numtwo;
  var result = firstNumber - secondNumber;
  res.send("Result=" + result);
});

app.post("/multiplication", (req, res) => {
  var firstNumber = req.body.numone;
  var secondNumber = req.body.numtwo;
  var result = firstNumber * secondNumber;
  res.send("Result=" + result);
});

app.post("/division", (req, res) => {
  var firstNumber = req.body.numone;
  var secondNumber = req.body.numtwo;
  var result = firstNumber / secondNumber;
  res.send("Result=" + result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
