import express from "express";
const app = express();
const port = 4000;

app.get("/", (req,res) =>{
    res.send("<h1>Hello </h1>");
});

app.get("/about", (req,res) =>{
    res.send("<h1>About me</h1><p>My name is Abhishek</p>");
});

app.get("/contact", (req,res) =>{
    res.send("<h1>Contact Me</h1> <p> phone: 7369071679</p>");
});
app.listen (port, () => {
    console.log(`server is Working on port: ${port}`);
});