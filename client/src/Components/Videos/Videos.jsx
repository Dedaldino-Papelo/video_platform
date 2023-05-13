import React, { useEffect } from 'react'
import './video.style.css'
import { Data } from '../../Videos'
import Lessons from '../Lessons/Lessons'
import {  useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from '../../Redux/Videos/video.slice'

const Videos = () => {

   const dispatch = useDispatch()
  const fetchVideo = useSelector((state) => state.videoReducer)
  const { loading, videos } = fetchVideo

  useEffect(() => {
    let data = "kelson"
    dispatch(fetchVideos(data))
  },[]) 

  return (
    <div className='Videos'>
      {
        videos.map((item) => (
            <Lessons key={item._id} data={item} />
        ))
      }
    </div>
  )
}

export default Videos
