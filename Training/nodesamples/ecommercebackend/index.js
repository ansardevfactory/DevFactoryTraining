const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/uservalidation", (req, res) => {
  if (req.body.username == "admin" && req.body.password == "admin") {
    result = [{ id: "1" }];
    res.send(result);
  } else {
    result = [];
    res.send(result);
  }
});

app.listen(8000, () => {
  console.log("Server is running");
});
