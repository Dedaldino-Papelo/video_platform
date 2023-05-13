import React from 'react'
import { useDispatch } from 'react-redux'
import './lessons.style.css'
import { fetchVideoById } from '../../Redux/Videos/video.slice'

const Lessons = ({ data }) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(fetchVideoById(data._id))
  }

  return (
    <div className='Lessons' onClick={handleClick}>
      <div>
        <span>{data.title}</span>
      </div>
    </div>
  )
}

export default Lessons
