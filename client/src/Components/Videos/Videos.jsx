import React from 'react'
import './video.style.css'
import { Data } from '../../Videos'
import Lessons from '../Lessons/Lessons'

const Videos = () => {
  return (
    <div className='Videos'>
      {
        Data.map((item) => (
            <Lessons key={item.id} data={item} />
        ))
      }
    </div>
  )
}

export default Videos
