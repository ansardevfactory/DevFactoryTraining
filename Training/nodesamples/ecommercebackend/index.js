const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const jwt = require("jsonwebtoken");

app.post("/uservalidation", (req, res) => {
  if (req.body.username == "admin" && req.body.password == "admin") {
   // result = [{ id: "1" }];
    //res.send(result);
    //result + "secretkey"====>jwt
    const result = [{
      id: 1,
      username: "john",
      email: "john@gmail.com",
    }];
    if(result.length>0){
      const usr=result[0];
      jwt.sign({user:usr},"secretkey",(err, token)=>{
        if(err)
          res.send(err)
        else
          res.json({token:token})
      })
    } else{
      res.json({token:""})
    }

  } else {
    res.json({token:""})
  }
});

app.post("/getproducts", (req, res) => {
  if (req.body.username == "admin" && req.body.password == "admin") {
    result = [
      { Id: "1", txtprdName: "sample", Rate: "100", Tax: "18" },
      { Id: "2", txtprdName: "sample2", Rate: "100", Tax: "18" },
      { Id: "3", txtprdName: "sample3", Rate: "100", Tax: "18" },
    ];
    res.send(result);
  } else {
    result = [];
    res.send(result);
  }
});

app.listen(8000, () => {
  console.log("Server is running");
});
