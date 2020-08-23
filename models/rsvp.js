const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var rsvpSchema = new Schema({
  name: String,
  email: String,
  attending: Boolean,
  guests: Number,
});

var Rsvp = mongoose.model("Rsvp", rsvpSchema);

module.exports = Rsvp;
