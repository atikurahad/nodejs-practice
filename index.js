// const express = require('express');
// const app = express();


// app.get("/" ,function(req, res){
//    res.send("Hello Express");
// })

// app.listen(8080, function(){
//     console.log(`Server run seccess`);
// })

const express = require('express')
const app = express();

app.get("/", function(req, res){
    res.send("Hello there")
})
app.get("/faq", function(req, res){
    res.send("Hello there, i am fror FAQ")
})
app.get("/about", function(req, res){
    res.send("I am from about")
})
app.get("/category", function(req, res){
    res.send("Hello there, i am from category")
})
app.get("/email", function(req, res){
    res.send("Hello there, i am from email")
})
app.get("/contact", function(req, res){
    res.send("Hello there, i am from contact")
})

app.listen(8080,function(){
    console.log("SERVER RUN SUCCESS")
})