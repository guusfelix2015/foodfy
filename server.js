const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.set("view engine", "njk");

server.use(express.static("public"));

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", (req, res) => {
  return res.render("index");
});

server.get("/about", (req, res) => {
  return res.render("about");
});

server.get("/recipes", (req, res) => {
  return res.render("recipes");
});

server.listen(5000, () => {
  console.log("server is running");
});
