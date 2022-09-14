import React from 'react'
import './Friends.css'

const Friends = (props) => {
  return (
    <div>
        <li className='sidebarFriend'>
            <img src={require(`../../${props.friend.profilePicture}`)} alt={props.friend.name} className='sidebarFriendImg'/>
            <span className='sidebarFriendName'>{props.friend.username}</span>
        </li>
    </div>
  )
}

export default Friends