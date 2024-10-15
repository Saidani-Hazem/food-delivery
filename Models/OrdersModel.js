const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const order = new Schema(
    {
      
      
    },
    {
      timestamps: true,
    }
  );


  
module.exports = mongoose.model("order", order);
