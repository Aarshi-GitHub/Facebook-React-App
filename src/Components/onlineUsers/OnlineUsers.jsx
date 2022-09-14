import React from 'react'
import "./OnlineUsers.css"

const OnlineUsers = ({onlineuser}) => {
  return (
    <div className='onlineUsers'>
        <li className='rightbarFriend'>
            <div className='rightbarImgCont'>
                <img src={require(`../../${onlineuser.profilePicture}`)} alt="" className='rightbarProfileImg'/>
                <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>{onlineuser.username}</span>
        </li>
    </div>
  )
}

export default OnlineUsers