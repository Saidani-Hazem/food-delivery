const express = require("express")
const { default: mongoose } = require("mongoose")
app = express()

require("dotenv").config()
app.listen(process.env.PORT , () => console.log(`Working on port ${process.env.PORT}`))

mongoose.connect(process.env.MONGO_URL).then(console.log("Connected To DB")).catch()