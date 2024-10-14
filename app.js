const express = require("express")
app = express()
//aaaaaaaaaaa
require("dotenv").config()


app.listen(process.env.PORT , () => console.log(`Working on port ${process.env.PORT}`))