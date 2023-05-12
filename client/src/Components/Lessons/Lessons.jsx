import React from 'react'
import './lessons.style.css'

const Lessons = ({ data }) => {
  return (
    <div className='Lessons'>
      <div>
        <span>{data.title}</span>
      </div>
    </div>
  )
}

export default Lessons
