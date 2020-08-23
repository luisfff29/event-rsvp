const express = require("express");
const pug = require("pug");
const port = 3000;
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/reply", (req, res) => {
  res.setHeader("Content-type", "text/html");
  console.log(req.body);
  res.send(
    `Thank you for your response! <br> <a href="/guests">Check list of guests</a>`
  );
});

app.get("/guests", (req, res) => {
  res.render("guests");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
