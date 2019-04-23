const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = (process.env.PORT || 5000);


express()
    /*
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    */

    .get('/', (req, res) => {
        res.sendFile(__dirname + "/index.html");
    })

    .get('/style.css', (req, res) => {
        res.sendFile(__dirname + "/style.css");
    })

    .get('/index.js', (req, res) => {
        res.sendFile(__dirname + "/index.js");
    })

    .get('/favicon.ico', (req, res) => {
        res.sendFile(__dirname + "/favicon.ico");
    })

    .listen(PORT)





















