// server.js

"use strict";

const path = require("path");

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('app/db.json');
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, "app")
});

const PORT = 3000;
const HOST_NAME = "localhost";
const HOST = `${HOST_NAME}:${PORT}`;

const NODE_ENV_DEVELOPMENT = "development";
const NODE_ENV_PRODUCTION = "production";

const INDEX_DEV = path.join(__dirname, "app/index.html");
const INDEX_PROD = path.join(__dirname, "app/index.min.html");

let indexHtml = INDEX_DEV;

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Use default router
server.use("/api", router);

server.use( (req, res, next) => {
  if (process.env.NODE_ENV != NODE_ENV_DEVELOPMENT) {
    indexHtml = INDEX_PROD;
  }

  next();
});

// Add custom routes before JSON Server router
server.get('/', (req, res) => {
  res.sendFile(indexHtml);
})

server.listen(PORT, () => {
  console.log(`JSON Server is running on ${HOST}`);
});
