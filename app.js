// import Express
const { json } = require("express");
const express = require("express");

// instantiated instance
const app = express();

// allow us to parse json
app.use(express.json());

// serve the static content
app.use(express.static("ui/"));

const fs = require("fs");

const frontPage = fs.readFileSync("./public/index.html").toString();
const packagePage = fs.readFileSync("./public/nodejs_pages/package.html").toString();
const appPage = fs.readFileSync("./public/nodejs_pages/app.html").toString();
const restAPIPage = fs.readFileSync("./public/nodejs_pages/restAPI.html").toString();
const nodemonPage = fs.readFileSync("./public/nodejs_pages/nodemon.html").toString();
const SSRPage = fs.readFileSync("./public/nodejs_pages/SSR.html").toString();

//Index
app.get("/", (req, res) => {
    
    res.send(frontPage);

});

app.get("/package", (req, res) => {
     
    res.send(packagePage); 
    
});

app.get("/app", (req, res) => {
     
    res.send(appPage); 
    
});

app.get("/restAPI", (req, res) => {
     
    res.send(restAPIPage); 
    
});

app.get("/nodemon", (req, res) => {
     
    res.send(nodemonPage); 
    
});

app.get("/SSR", (req, res) => {
     
    res.send(SSRPage); 
    
});

app.listen(process.env.PORT || 8080);