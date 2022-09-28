import React from 'react'
import "./Share.css"
import { MdClose,MdVideoCameraFront,MdPermMedia,MdEmojiEmotions } from "react-icons/md";
import { useState } from 'react';

const Share = () => {

  const [fileState,setFileState] = useState(null);
  const removePost = () =>{
    setFileState(null)
  }
  return (
    <div className='share'>
        <div className='shareContainer'>
            <div className='shareFirst'>
                <img src={require("../../assets/person/user.jpg")} alt="" className='shareProfileImg'/>
                <input type="text" placeholder="What's on your mind Crystal ?" className='shareText'/>
            </div>
            {fileState && <div className='shareImgCont'>
              <img src={URL.createObjectURL(fileState)} alt="" width="100%" className='shareImg'/>
              <MdClose onClick={removePost} className='shareCloseImg'/>
              <hr/>
               </div>}
            <div className='shareSecond'>
                <div className='shareOptions'>
                  <div className='shareOption'>
                    <MdVideoCameraFront style={{color:"red"}} className='shareIcon'/>
                    <span className='shareOptionText'>Live</span>
                  </div>
                  <label htmlFor='shareFileInput' className='shareOption'>
                    <MdPermMedia style={{color:"#82d4b5"}}className='shareIcon'/>
                    <span className='shareOptionText'>Photos</span>
                    <input onChange={(e)=>setFileState(e.target.files[0])} type="file" id="shareFileInput" accept=".png,.jpeg,.jpg" style={{display:"none"}}/>
                  </label>
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