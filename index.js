// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// app.get("/clearcookies", function (req, res) {
//   res.status(201);

//   res.clearCookie("username", "JohnDoe.");
//   res.clearCookie("language", "en");
//   res.end("i am from remove cookie");
// });

// app.listen(3000, function () {
//   console.log("Server is listening");
// });

// app.get("/", function (req, res) {
//   res.cookie("username", "JohnDoe.");
//   res.cookie("language", "en");
//   res.end("i am from set cookie");
// });

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

//  const express = require('express');
//  const app = express();

//  app.post('/',function(req, res){
//     // res.end("This is POST")
// let firstName = req.query.firstName;
// let lastName = req.query.lastName;

//     const userName = req.header("username");
//     const password = req.header("password");

//     res.end(`username: ${userName} password: ${password}`)

//  } )

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




// body-parser
// const express = require('express');
// const bodyParser = require('body-parser');
// const multer  = require('multer')

// const app = express()
// app.use(bodyParser.json())
// const upload = multer()
// app.use(upload.array())
// app.use(express.static('public'))


//  app.post("/", function(req, res){
      
//     let jsonData = req.body;
//     let JSONStritng = JSON.stringify(jsonData);
//     res.send(JSONStritng)

//  })
//  app.get("/", function(req,res){
//     res.cookie("name","ahad")
//     res.cookie("age","34")
//     res.send(" hi i am from cookie")
//  })
//  app.get("/clear", function(req,res){
//     res.clearCookie("name","ahad")
//     res.clearCookie("age","34")
//     res.send(" Hi, i am from clear cookie")
//  })


// app.listen(3000,(()=>{
//     console.log('App is listening on port 3000')
// }))

const express = require('express');
const app = express()
  
  app.get('/' ,async(req,res)=>{
   
   res.end("Hello i am from get request")

  })

app.listen(8080,()=>{
   console.log("Server is listening on port 8080");
})