const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/addition', (req, res) => {
    var firstNumber=req.body.numone;
    var secondNumber=req.body.numtwo;
    var result=firstNumber+secondNumber;
    res.send("Result="+result)
})

app.post('/subtraction', (req, res) => {
    var firstNumber=req.body.numone;
    var secondNumber=req.body.numtwo;
    var result=firstNumber-secondNumber;
    res.send("Result="+result)
})


app.post('/multiplication', (req, res) => {
    var firstNumber=req.body.numone;
    var secondNumber=req.body.numtwo;
    var result=firstNumber*secondNumber;
    res.send("Result="+result)
})


app.post('/division', (req, res) => {
    var firstNumber=req.body.numone;
    var secondNumber=req.body.numtwo;
    var result=firstNumber/secondNumber;
    res.send("Result="+result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
