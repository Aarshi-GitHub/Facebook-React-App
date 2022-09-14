import React from 'react'
import Navbar from '../navbar/Navbar.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import Feed from '../feed/Feed.jsx';
import RightSide from '../rightSide/RightSide.jsx';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='homeContainer'>
        <Sidebar/>
        <Feed/>
        <RightSide/>
      </div>
    </div>
  )
}

export default Home