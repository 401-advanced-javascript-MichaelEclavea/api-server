'use strict';

const express = require('express');
const app = express();
const object404 = require('../middleware/404.js');
const object500 = require('../middleware/500');
const objectLogger = require('../middleware/logger');
const todaysDate = require('../middleware/timestamp.js');


app.use(express.json(), express.urlencoded({extended: true}), todaysDate, objectLogger);


app.post('/products', (req, res) =>{
    res.status(200).send(req.body);
})

app.get('/products', (req, res) => {
    res.status(200).send(req.body);
})

app.get('/products/:id', (req, res) => {
    res.status(200).send(req.params);
})

app.put('/products/:id', (req, res) => {
    res.status(200).send(req.params);
})

app.delete('/products/:id', (req, res) => {
    res.status(200).send(req.params);
})



module.exports = app;
