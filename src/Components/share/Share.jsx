import React from 'react'
import "./Share.css"
import { MdVideoCameraFront } from "react-icons/md";
import { MdPermMedia } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";

const Share = () => {
  return (
    <div className='share'>
        <div className='shareContainer'>
            <div className='shareFirst'>
                <img src={require("../../assets/person/user.jpg")} alt="" className='shareProfileImg'/>
                <input type="text" placeholder="What's on your mind Crystal ?" className='shareText'/>
            </div>
            <div className='shareSecond'>
                <div className='shareOptions'>
                  <div className='shareOption'>
                    <MdVideoCameraFront style={{color:"red"}} className='shareIcon'/>
                    <span className='shareOptionText'>Live</span>
                  </div>
                  <div className='shareOption'>
                    <MdPermMedia style={{color:"#82d4b5"}}className='shareIcon'/>
                    <span className='shareOptionText'>Photos</span>
                  </div>
                  <div className='shareOption'>
                    <MdEmojiEmotions style={{color:"#ebdf09"}}className='shareIcon'/>
                    <span className='shareOptionText'>Feeling/Activity</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share