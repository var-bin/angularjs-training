// server.js

"use strict";

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('app/db.json')
const middlewares = jsonServer.defaults({
  static: "app/"
});

const path = require("path");

const PORT = 3000;
const HOST_NAME = "localhost";
const HOST = `${HOST_NAME}:${PORT}`;

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Use default router
server.use("/api", router);

// Add custom routes before JSON Server router
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "app/assets/index.html"));
})

server.listen(PORT, () => {
  console.log(`JSON Server is running on ${HOST}`);
});
