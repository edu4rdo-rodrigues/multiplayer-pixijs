// routes/routes.js

const express = require("express");
const path = require("path");
const routesConfig = require("./routesConfig");

const router = express.Router();
const publicPath = __dirname; // Substitua pelo caminho correto do diretório público

// Define as rotas para os arquivos JavaScript
routesConfig.forEach((route) => {
  router.get(route, (req, res) => {
    res.sendFile(path.join(publicPath, route));
  });
});

module.exports = router;
