const express = require('express');
const app =express();
const path =require('path');
const port = process.env.PORT||9000;
const staticPath = path.join(__dirname,"../public");
app.set('view engine', 'hbs');
app.use(express.static(staticPath));


app.get('/', (req,res)=>{
    // res.send("welcome to home page")
    res.render("index.hbs")
    console.log("Home page is established");
})
app.get('/About', (req,res)=>{
    // res.send("Welcome About page");
    res.render("about.hbs")

    console.log("About page is established");
})
app.get('/Weather', (req,res)=>{
    res.render("weather")
    console.log("Weather page is established");
})
app.get("*", (req,res)=>{
    res.render('error.hbs')
})
app.listen(port , ()=>{
    console.log("success!");
})
