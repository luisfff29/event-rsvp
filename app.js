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
  console.log(req.body);
  res.send("Thank you for your response!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
