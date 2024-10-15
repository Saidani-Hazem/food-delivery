const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const feedback = new Schema(
    {
      
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model("feedback", feedback);