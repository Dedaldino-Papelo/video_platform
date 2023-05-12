const express = require("express")
const mongoose = require("mongoose")
const app = express()

const PORT = 8000

mongoose.connect("mongodb://localhost:27017")




app.listen(PORT, () => {
    console.log("App listening opn port", PORT)
})

