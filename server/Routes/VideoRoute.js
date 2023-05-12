const express = require("express")
const { createVideo, getVideoById, findVideos } = require("../Controllers/VideoController")
const router = express.Router()


router.post("/", createVideo)
router.get("/", findVideos)
router.get("/:id", getVideoById)

module.exports = router