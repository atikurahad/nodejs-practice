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
app.patch("/about", function(req, res){
    res.send("I am from about")
})
app.delete("/category", function(req, res){
    res.send("Hello there, i am from category")
})
app.get("/email", function(req, res){
    res.send("Hello there, i am from email")
})
app.put("/contact", function(req, res){
    res.end("Hello there, i am from contact")
})

app.get("/redirect", function(req, res){

    res.redirect('http://localhost:8080/email')

})


const PORT = 8080;
app.listen(PORT,function(){
    console.log(`SERVER RUN SUCCES ${PORT}`)
})