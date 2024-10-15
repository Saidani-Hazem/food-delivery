const express = require("express")
const { default: mongoose } = require("mongoose")
const bodyParser = require("body-parser");
const router = require("./router")
require("dotenv").config()


app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use("/api", router);



app.listen(process.env.PORT , () => console.log(`Working on port ${process.env.PORT}`))



mongoose.connect(process.env.MONGO_URL).then(console.log("Connected To DB")).catch()