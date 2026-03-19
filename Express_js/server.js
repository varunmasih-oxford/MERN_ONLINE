const express = require("express")
const app = express()
const port = 3000
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("welcome here...!")
    
})

app.get("/about",(req,res)=>{
    res.send("we're pleased to share a bit about ourselfes")
    
})

app.get("/contact",(req,res)=>{
    res.send("Mail us here : company@mail.com")
    
})

app.get("/user/:userName",(req,res)=>{
    res.send(`User Name: ${req.params.userName}`);
    
})

app.get("/user/:userName/:userAge",(req,res)=>{
    res.send(`User Name and Age: ${req.params.userName} , ${req.params.userAge}`);
    
})

app.get("/error",(req,res)=>{
    res.status(404).send("Page Not Found");
    
})


app.listen(3000,()=>{
    console.log("running on port",port);
    
})