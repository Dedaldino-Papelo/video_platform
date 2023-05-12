const mongoose = require("mongoose")

const videoSchema = mongoose.Schema({
    title: String,
    videoUrl: String
}, {timestamps: true})

const Video = mongoose.model("Videos", videoSchema )
module.exports = Video