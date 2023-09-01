

// const express = require('express')
// const app = express();

// app.get("/", function(req, res){
//     res.send("Hello there")
// })
// app.get("/faq", function(req, res){
//     res.send("Hello there, i am fror FAQ")
// })
// app.patch("/about", function(req, res){
//     res.send("I am from about")
// })
// app.delete("/category", function(req, res){
//     res.send("Hello there, i am from category")
// })
// app.get("/email", function(req, res){
//     res.send("Hello there, i am from email")
// })
// app.put("/contact", function(req, res){
//     res.end("Hello there, i am from contact")
// })

// app.get("/redirect", function(req, res){

//     res.redirect('http://localhost:8080/email')
// })

// app.get("/cookie", function(req, res){

//     res.cookie('name',"ahad")
//     res.cookie('city',"tngail")
//     res.cookie('age',"23")
//     res.end("i am from cookie")

// })
// app.get("/cookies", function(req, res){
//     res.status(201)

//     res.clearCookie('name',"ahad")
//     res.clearCookie('city',"tngail")
//     res.clearCookie('age',"23")
//     res.end("i am from remove cookie")

// })



// const PORT = 8080;
// app.listen(PORT,function(){
//     console.log(`SERVER RUN SUCCES ${PORT}`)
// })

// const http = require('http');

// const createServer= ()=>{
  
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/plain'});
//     res.end("Hello This Is Node Js Server!");
// })


// }

// createServer();

 const express = require('express');
 const app = express();

 app.post('/',function(req, res){
    res.end("This is POST")
 } )



app.listen(5500,function(){
    console.log("Server is listening");
})