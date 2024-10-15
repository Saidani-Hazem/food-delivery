const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const food = new Schema(
  {
    name: String,
    type: String,
    price: Number,
    description: String,
    discount: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("food", food);