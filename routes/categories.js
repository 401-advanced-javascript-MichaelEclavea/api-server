'use strict';

const express = require('express');

const router = express.Router();

const Categories = require('../lib/models/categories/categories-model.js');

app.use(express.json(), express.urlencoded({extended: true}), todaysDate, objectLogger);


app.router('./categories')
.post('/categories', (req, res) =>{
    res.status(200).send(req.body);
})
.get('/categories', (req, res) => {
    res.status(200).send(req.body);
})
.get('/categories/:id', (req, res) => {
    res.status(200).send(req.params);
})
.put('/categories/:id', (req, res) => {
    res.status(200).send(req.params);
})
.delete('/categories/:id', (req, res) => {
    res.status(200).send(req.params);
});



module.exports = router;