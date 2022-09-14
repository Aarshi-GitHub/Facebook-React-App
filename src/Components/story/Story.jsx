import React from 'react'
import StoryCard from '../storyCard/StoryCard'
import {Users} from "../../userData"
import "./Story.css"
const Story = () => {
  return (
    <div className='story'>
        <div className='storyCard'>
            <div className='darkEffect'></div>
            <img src={require(`../../assets/person/user.jpg`)} alt='' className='cardProfile'/>
            <img src={require(`../../assets/person/user.jpg`)} alt='' className='cardBackground'/>
        <img src={require(`../../assets/upload.jpg`)} alt='' className='cardAdd'/>
        <span className='username'>Crytal</span>
        </div>
        {Users.map((user)=><StoryCard key={user.id} friend={user}/>)}
    </div>
  )
}
export default Story