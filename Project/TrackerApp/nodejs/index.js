const express = require("express");
const authMiddleware = require("./auth-middleware");
const firebase = require("./firebase/config");  
const app = express();

const books = [
  { id: 1, name: "Harry Potter" },
  { id: 2, name: "Clean Code" },
  { id: 3, name: "Javascript: Good practices" },
];

// app.use("/", authMiddleware);

app.get("/books", (request, response) => {
  return response.send({ books });
});


app.post('/login', function(req, res, next)
{ 
    
    // firebase.auth().createUser()
    // firebase.auth().signInWithEmailAndPassword("testwaa@email.com","test@123").then((rest)=>console.log(rest))
});
app.post('/register', function(req, res, next)
{
    // res.send("here")
  var email = "testwaa@email.com";
  var password = "test@123";

  firebase.auth().createUser({
    email: email,
    password: password,
    displayName:  email,
  }).then((rsl)=>{
    console.log("reslt==>"+JSON.stringify(rsl))
    res.send(rsl)
  }).catch((err)=>{console.log(err)
res.send(err)
})
});


app.listen(4000, () => console.log("The server is running at PORT 4000"));
