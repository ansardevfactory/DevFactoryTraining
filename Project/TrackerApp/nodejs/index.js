const express = require("express");
const authMiddleware = require("./auth-middleware");
const firebase = require("./firebase/config");
const app = express();
const db=firebase.firestore(); 
app.get("/register", function (req, res, next) {
  // res.send("here")
  var email = "abc@email.com";
  var password = "test@123";

  firebase
    .auth()
    .createUser({
      email: email,
      password: password,
      displayName: email,
    })
    .then((rsl) => {
      console.log("reslt==>" + JSON.stringify(rsl));
      res.send(rsl);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.get('/getdata',async (req, res)=>{
  const users = await  db.collection('users').doc('trip_1').get();
 res.send(JSON.stringify(users)+"")
})

app.get('/insert',async (req, res)=>{
  const users = await  db.collection('abc@email.com').doc('trip_1').set({"test":{"data":"one"}});
 res.send(JSON.stringify(users)+"")
})

app.post('/getdata',authMiddleware, async (req, res)=>{
  const users = await  db.collection('users').doc('trip_1').get();
 res.send(JSON.stringify(users)+"")
})

app.listen(4000, () => console.log("The server is running at PORT 4000"));
