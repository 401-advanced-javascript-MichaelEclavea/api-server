'use strict';

const { response } = require('./lib/server.js');
const app = require('./lib/server.js')
require('dotenv').config();
const PORT = process.env.PORT;

// change start script in package.json 

// create docs folder and paste in downloaded file from swagger


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})