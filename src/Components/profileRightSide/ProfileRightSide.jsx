import React from 'react'
import "./ProfileRightSide.css"
import {MdModeEditOutline} from "react-icons/md";
import {Link} from "react-router-dom"

const ProfileRightSide = () => {
  return (
    <div className='profileRightSide'>
        <div className='profileRightSideHeading'>
            <span className='profileRightSideTitle'>User Information</span>
            <Link to="/profile/username/edit" style={{textDecoration:"none"}}>
            <span className="editButton"> Edit Profile <MdModeEditOutline style={{fontSize:"19px",marginLeft:"4px",marginBottom:"2px"}}/></span>
            </Link>
            
        </div>
        <div className='profileRightSideInfo'>
            <div className='profileRightSideItem'>
                <span className='profileRightSideItemKey'>Email : </span>
                <span className='profileRightSideItemVal'>crystal22@example.com</span>
            </div>
            <div className='profileRightSideItem'>
                <span className='profileRightSideItemKey'>Phone Number : </span>
                <span className='profileRightSideItemVal'>+91 12321 54345</span>
            </div>
            <div className='profileRightSideItem'>
                <span className='profileRightSideItemKey'>Date of Birth : </span>
                <span className='profileRightSideItemVal'>29th Feb 2000</span>
            </div>
            <div className='profileRightSideItem'>
                <span className='profileRightSideItemKey'>Education : </span>
                <span className='profileRightSideItemVal'>Master of Arts</span>
            </div>
            <div className='profileRightSideItem'>
                <span className='profileRightSideItemKey'>City : </span>
                <span className='profileRightSideItemVal'>Chandigarh</span>
            </div>
            <div className='profileRightSideItem'>
                <span className='profileRightSideItemKey'>Country : </span>
                <span className='profileRightSideItemVal'>India</span>
            </div>
        </div>
        <h4 className='profileRightSideTitle'>Best Friends</h4>
        <div className='profileRightSideFollowings'>
            <div className='profileRightSideFollowing'>
                <img src={require("../../assets/person/person1.jpg")} alt="" className='profileRightSideFolImg'/>
                <span className='profileRightSideFolName'>Khushi</span>
            </div>
            <div className='profileRightSideFollowing'>
                <img src={require("../../assets/person/person2.jpg")} alt="" className='profileRightSideFolImg'/>
                <span className='profileRightSideFolName'>Jiya</span>
            </div>
            <div className='profileRightSideFollowing'>
                <img src={require("../../assets/person/person3.jpg")} alt="" className='profileRightSideFolImg'/>
                <span className='profileRightSideFolName'>Riya</span>
            </div>
            <div className='profileRightSideFollowing'>
                <img src={require("../../assets/person/person4.jpg")} alt="" className='profileRightSideFolImg'/>
                <span className='profileRightSideFolName'>Suhani</span>
            </div>
            <div className='profileRightSideFollowing'>
                <img src={require("../../assets/person/person5.jpg")} alt="" className='profileRightSideFolImg'/>
                <span className='profileRightSideFolName'>Jenny</span>
            </div>
            <div className='profileRightSideFollowing'>
                <img src={require("../../assets/person/person6.jpg")} alt="" className='profileRightSideFolImg'/>
                <span className='profileRightSideFolName'>Glimpsy</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileRightSide