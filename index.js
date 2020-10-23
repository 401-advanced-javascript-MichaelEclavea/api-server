'use strict';

const { response } = require('./lib/server.js');
const app = require('./lib/server.js')
require('dotenv').config();
const PORT = process.env.PORT;

const mongoose = require('mongoose');


const DB_URI = process.env.MONGODB_URI;


mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() =>{
        console.log('connected to db');
        app.listen(PORT, () =>{
            console.log('server is running on port', PORT);
        });
    })
    .catch(err =>{
        console.error(err);
    });