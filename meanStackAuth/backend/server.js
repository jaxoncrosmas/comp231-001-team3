var express = require('express');
var cors = require('cors');
var app = express();



var post = [
    {messge :"Hello world"},
    {greeting:'What is it' }
]

app.use(cors());

const port = 3000;
app.get('/posts',(req,res)=>{
    console.log("web server opened");
    res.send(post);
});


app.listen(port);