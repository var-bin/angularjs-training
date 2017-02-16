// server.js

"use strict";

const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const path = require("path");

const PORT = 3000;
const HOST_NAME = "localhost";
const HOST = `${HOST_NAME}:${PORT}`;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
})

server.listen(PORT, () => {
  console.log(`JSON Server is running on ${HOST}`);
});
