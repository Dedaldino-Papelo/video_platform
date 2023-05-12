import React from 'react'
import './home.style.css'
import RightSide from '../../Components/RightSide/RightSide'
import Header from '../../Components/Header/Header'
import Content from '../../Components/ContentSide/Content'

const Home = () => {
  return (
    <div className='Homepage'>
      <Header />
      <div className=''>
        <Content />
        <RightSide />
      </div>
    </div>
  )
}

export default Home
