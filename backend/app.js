const express = require("express");

const app = express();
const router = require("./router/index.js");
const port = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
console.log("We live ");
app.listen(port);
