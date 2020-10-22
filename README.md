# api-server

This api server creates a linked data structure that files are connected as such that allows the client with REST and CRUD functionality

- I have used mongoose and mongoDB for database storage

- middleware has been used across application. most of which can be found in the middleware folder

- PORT has been setup with dotenv

# Approach & Efficiency
The adding of middleware and npm modules help with the efficiency in processing req and res. 

uml:(./uml/class-7.png);

API
To Run: npm i to download libraries

next to create a .env file with the definition of the port. PORT=3000

in terminal: node index.js