import  Express  from "express";

const app = Express();
const port =3000;

// these all are methods of http req
app.get("/", (req,res) =>{
    res.send("<h1>Home page</h1>");
    console.log("heloo http server");
});

app.post("/register", (res,req) =>{
    // print someh
    res.sendstatus(201);
});

app.put("/user/Abhishek", (res, req) =>{
    res.sendstatus(201);

});

app.patch("/user/Abhishek", (res, req) =>{
res.sendstatus("201");
});


app.listen (port, () => {
    console.log(`server is Working on port: ${port}`);
});