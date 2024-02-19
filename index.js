import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var output=[];
var posts="";
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
app.post("/post",(req,res)=>{
    posts=(req.body["blog"]);
    output.push(posts);
    res.render("blogpost.ejs",{
        blogpost:req.body["blog"],
    });
});
app.get("/home",(req,res)=>{
    res.redirect("/");
});
app.get("/adventure",(req,res)=>{
    res.render("adventure.ejs");
});
app.get("/view",(req,res)=>{
    res.render("blogview.ejs",{
        blogs:output,
    });
});
app.get("/delete",(req,res)=>{
    res.render("delete.ejs",{
        del:output,
    });
});
app.post("/deleted",(req,res)=>{
    var no=req.body["index"];
    output.splice(no-1,1);
    res.render("delete.ejs",{
        newArray:output,
    });
});
