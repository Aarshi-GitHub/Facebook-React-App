import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import RightSide from "../../Components/rightSide/RightSide"
import Feed from "../../Components/feed/Feed"
import "./Profile.css"

const Profile = ({toggleTheme}) => {
  return (
    <div className='profile'>
        <Navbar/>
        <div className='profileContainer'>
            <Sidebar toggleThemeFunc={toggleTheme}/>
            <div className='profileRight'>
                <div className='profileTop'>
                    <div className='profileCover'>
                       <img src={require("../../assets/profileBackground.jpg")} alt="" className="profileBackImg"/> 
                       <img src={require("../../assets/person/user.jpg")} alt="" className="profileUserImg"/> 
                    </div>
                    <div className='profileInfo'>
                        <h4 className='profileInfoName'>Crystal Perkins</h4>
                        <span className='profileFullInfo'>Hey Friends!</span>
                    </div>
                </div>
                <div className='profileBottom'>
                    <Feed/>
                    <RightSide profile/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile