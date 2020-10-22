'use strict';

const express = require('express');

const router = express.Router();

const { getAll, getOne, createOne } = require('../controllers/user-controller.js');
const app = require('../lib/server.js');

app.use(express.json(), express.urlencoded({extended: true}), todaysDate, objectLogger);

app.router('./products')
.post('/products', (req, res) =>{
    res.status(200).send(req.body);
})
.get('/products', (req, res) => {
    res.status(200).send(req.body);
})
.get('/products/:id', (req, res) => {
    res.status(200).send(req.params);
})
.put('/products/:id', (req, res) => {
    res.status(200).send(req.params);
})
.delete('/products/:id', (req, res) => {
    res.status(200).send(req.params);
});

module.exports = router;