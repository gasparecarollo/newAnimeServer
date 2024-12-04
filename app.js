const express = require('express');
const app = express();
const animesController = require("./controllers/animes");

app.get("/", (req, res) => {
    res.send("Welcome to Animania");
})

//CRUD

app.use("/animes", animesController);

app.get("*", (req, res) => { //Catch all for all request that did not match any route(methods and paths)
    res.status(404).send("The request you are looking for does not exist.");
})


module.exports = app;