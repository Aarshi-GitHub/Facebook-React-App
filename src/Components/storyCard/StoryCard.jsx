import React from 'react'

const StoryCard = ({friend}) => {
  return (
    <div className='storyCard'>
        <div className='darkEffect'></div>
        <img src={require(`../../${friend.profilePicture}`)} alt='' className='cardProfile'/>
            <img src={require(`../../${friend.profilePicture}`)} alt='' className='cardBackground'/>
        <span className='username'>{friend.username}</span>
    </div>
  )
}

export default StoryCard