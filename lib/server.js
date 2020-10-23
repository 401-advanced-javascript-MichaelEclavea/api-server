'use strict';

const express = require('express');
const app = express();
const object404 = require('../middleware/404.js');
const object500 = require('../middleware/500');
const objectLogger = require('../middleware/logger');
const todaysDate = require('../middleware/timestamp.js');


app.use(express.json(), express.urlencoded({extended: true}), todaysDate, objectLogger);

const v1Router = require('./routes/v1.js');



app.use('/v1', v1Router)


app.use((err, req, res, next) =>{
    console.log(err);
    res.status(400).send('Try again, you got a 404');
});


module.exports = app;
