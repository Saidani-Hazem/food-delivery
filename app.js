const express = require("express")
app = express()

require("dotenv").config()


app.listen(process.env.PORT , () => console.log(`Working on port ${process.env.PORT}`))