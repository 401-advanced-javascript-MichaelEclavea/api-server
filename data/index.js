'use strict';

const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middleswares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;





server.use(middleswares);
server.use(router);

server.listen(PORT, ()=>{
console.log('Server is running on port: ', PORT);
})


// change start script in package.json 

// create docs folder and paste in downloaded file from swagger


