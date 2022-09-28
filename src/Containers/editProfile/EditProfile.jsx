import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import {MdDriveFolderUpload} from "react-icons/md";
import "./EditProfile.css"

const EditProfile = ({toggleTheme}) => {
  return (
    <div className='editProfile'>
        <Navbar/>
        <div className='editProfileCont'>
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
                <div className='editProfileRightBottom'>
                    <div className='top'><h1>Edit User Profile</h1></div>
                    <div className='bottom'>
                        <div className='left'>
                            <img src={require("../../assets/defaultProfile.jpg")} alt=''/>
                        </div>
                        <div className='right'>
                            <form>
                                <div className='formInput'>
                                    <label htmlFor='file'>Image : <MdDriveFolderUpload className='icon'/></label>
                                    <input style={{display:"none"}} type="file" id="file"/>
                                </div>
                                <div className='formInput'>
                                    <label className='editLabel'>Name</label>
                                    <input type="text" placeholder="e.g Harry Potter"/>
                                </div>
                                <div className='formInput'>
                                    <label className='editLabel'>Username</label>
                                    <input type="text" placeholder="e.g harry_Potter_28"/>
                                </div>
                                <div className='formInput'>
                                    <label className='editLabel'>Em@il</label>
                                    <input type="email" placeholder="e.g harryPotter@example.com"/>
                                </div>
                                <div className='formInput'>
                                    <label className='editLabel'>Phone</label>
                                    <input type="text" placeholder="e.g +91 92529 78687"/>
                                </div>
                                <div className='formInput'>
                                    <label className='editLabel'>Education</label>
                                    <input type="text" placeholder="e.g Bachelor of Magic"/>
                                </div>
                                <div className='formInput'>
                                    <label className='editLabel'>Country</label>
                                    <input type="text" placeholder="e.g India"/>
                                </div>
                                <button type="submit" className='updateButton'>
                                    Update Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile