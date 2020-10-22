'use strict';

const express = require('express');
const app = express();
const object404 = require('../middleware/404.js');
const object500 = require('../middleware/500');
const objectLogger = require('../middleware/logger');
const todaysDate = require('../middleware/timestamp.js');


app.use(express.json(), express.urlencoded({extended: true}), todaysDate, objectLogger);

const category = require('../routes/categories.js');
const products = require('../routes/products.js')


app.use('/categories', )




module.exports = app;
