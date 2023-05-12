const Video = require("../Models/VideosModel")

const createVideo = async (req, res) => {
    const { title, videoUrl } = req.body
    
    try {
        const video = await Video.create({
            title,
            videoUrl
        })

        if(video){
            res.status(200).json(video)
        } else {
            res.status(400).json({message: "unable to locate video"})
        }

    } catch (error) {
        res.status(400).json({message: "internal server error"})
    }
}

const getVideoById = async (req, res) => {
    const { id } = req.params

    try {
        const video = await Video.findById(id)

        if(video){
            res.status(200).json(video)

        } else {
            res.status(400).json({message: "unable to locate video"})
        }
        
    } catch (error) {
        res.status(400).json({message: "internal server error"})
    }
}

const findVideos = async (req, res) => {
    try {
        const video = await Video.find()
        res.status(200).json(video)
        
    } catch (error) {
        res.status(400).json({message: "internal server error"})
    }
}

module.exports = {
    createVideo,
    getVideoById,
    findVideos
}