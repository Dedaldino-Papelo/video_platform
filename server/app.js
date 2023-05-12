const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const VideoRoute = require("./Routes/VideoRoute")

const PORT = 8000

mongoose.connect("mongodb://localhost:27017")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use("/video", VideoRoute)


app.listen(PORT, () => {
    console.log("App listening opn port", PORT)
})

