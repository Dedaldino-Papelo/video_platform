const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
    title: String,
    videoUrl: String
}, 

{timestamps: true})

const Video = mongoose.model("Video", videoSchema )
module.exports = Video