// import Express
const { json } = require("express");
const express = require("express");

// instantiated instance
const app = express();

// allow us to parse json
app.use(express.json());

// serve the static content
app.use(express.static("ui/"));

//Index
app.get("/", (req, res) => {
    
    res.sendFile('index.html',{root:'public'});

});

app.get("/parsing", (req, res) => {
     
    res.sendFile('parsing.html', {root:'public/javascript_pages'}) 
    
});

app.get("/objects", (req, res) => {
     
    res.sendFile('objects.html', {root:'public/javascript_pages'}) 
    
});

app.get("/package", (req, res) => {
     
    res.sendFile('package.html', {root:'public/nodejs_pages'}) 
    
});

app.get("/app", (req, res) => {
     
    res.sendFile('app.html', {root:'public/nodejs_pages'}) 
    
});

app.get("/restAPI", (req, res) => {
     
    res.sendFile('restAPI.html', {root:'public/nodejs_pages'}) 
    
});

app.get("/nodemon", (req, res) => {
     
    res.sendFile('nodemon.html', {root:'public/nodejs_pages'}) 
    
});

app.listen(8080);