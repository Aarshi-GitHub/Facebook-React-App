import React from 'react'
import Navbar from '../../Components/navbar/Navbar.jsx';
import Sidebar from '../../Components/sidebar/Sidebar.jsx';
import Feed from '../../Components/feed/Feed.jsx';
import RightSide from '../../Components/rightSide/RightSide.jsx';
import './Home.css'

const Home = ({toggleTheme}) => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='homeContainer'>
        <Sidebar toggleThemeFunc={toggleTheme}/>
        <Feed/>
        <RightSide/>
      </div>
    </div>
  )
}

export default Home