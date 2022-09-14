import React from 'react'
import { UserOnline } from '../../userData'
import OnlineUsers from '../onlineUsers/OnlineUsers'
import "./RightbarHome.css"

const RightbarHome = () => {
  return (
    <div className='rightbarHome'>
        <div className='birthdayContainer'>
            <img src={require('../../assets/gift.jpg')} alt='' className='birthdayImg'/>
            <span className='birthdayText'><b>Jenny</b> and <b>other friends</b> have a birthday today</span>
        </div>
        <img src={require('../../assets/adv.jpg')} alt="" className="rightbarAdvert"/>
        <span className='rightbarTitle'>Online Friends</span>
        <ul className="rightbarFriendsList">
          {UserOnline.map((u) =>
            <OnlineUsers key={u.id} onlineuser={u}/> 
          )}
            
        </ul>
    </div>
  )
}

export default RightbarHome