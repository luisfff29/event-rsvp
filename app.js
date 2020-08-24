const express = require("express");
const pug = require("pug");
const port = 3000;
const mongoose = require("mongoose");

const Rsvp = require("./models/rsvp");
const connect = mongoose.connect("mongodb://localhost:27017/rsvp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.set("view engine", "pug");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/reply", (req, res) => {
  var guests = 0;
  if (req.body.guests !== undefined) {
    guests = req.body.guests;
  }

  const user = new Rsvp({
    name: req.body.name,
    email: req.body.email,
    attending: true ? req.body.attending === "yes" : false,
    guests: guests,
  });

  user.save((err, user) => {
    if (err) console.error(err);
    console.log(user);
  });

  res.render("reply");
});

app.get("/guests", (req, res) => {
  Rsvp.find(function (err, rsvps) {
    if (err) console.error(err);
    res.render("guests", { users: rsvps });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
