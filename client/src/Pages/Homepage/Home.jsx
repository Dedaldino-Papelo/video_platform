import React from 'react'
import './home.style.css'
import SideBar from '../../Components/SideBar/SideBar'
import Header from '../../Components/Header/Header'
import Content from '../../Components/ContentSide/Content'

const Home = () => {
  return (
    <div className='Homepage'>
      <Header />
      <div className=''>
        <Content />
        <SideBar />
      </div>
    </div>
  )
}

export default Home
