const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: Number,
  detail: String,
  name: String,
  image: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYR2bCjGlp2FUnFWW4k_5H5DdKUK0H4OdH82ogj4ngj75z6UqeqpQOxHjFJyaLeCOX-n4&usqp=CAU",
  },
});

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
  image: String,
  position: String,
  currentTeam: String,
  accolades: [String],
  content: String,
  reviews: [reviewSchema],
});

module.exports = mongoose.model("Player", playerSchema);
