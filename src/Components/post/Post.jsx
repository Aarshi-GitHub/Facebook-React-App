import React from 'react'
import "./Post.css"
import { MdMoreVert,
    MdFavorite,
    MdThumbUp,
    MdThumbUpOffAlt,
    MdChatBubbleOutline,
    MdShare} from "react-icons/md";
import {Users} from "../../userData"

const Post = ({post}) => {
    const user = Users.filter((u)=> u.id===post.userId)[0]
  return (
    <div className='post'>
        <div className="postContainer">
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src={require(`../../${user.profilePicture}`)} alt="" className='postProfileImg'/>
                    <span className='postUsername'>{user.username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className='postTopRight'>
                    <MdMoreVert className='postVertButton'/>
                </div>
            </div>
            <div className='postCenter'>
                <span className="postText">{post.body}</span>
                <img src={require(`../../${post.photo}`)} alt="" className='postImg'/>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <MdFavorite className='bottomLeftIcon' style={{color:"red"}}/>
                    <MdThumbUp className='bottomLeftIcon' style={{color:"#011631"}}/>
                    <span className='postLikeCounter'>{post.like}</span>
                </div> 
                <div className='postBottomRight'>
                <span className='postCommentText'>{post.comments} · comments · share
                </span>
              </div>
            </div>
            <hr className='footerHr'/>
            <div className='postBottomFooter'>
                <div className='postBottomFooterItem'>
                   <MdThumbUpOffAlt className='footerIcon'/> 
                   <span className='footerText'>Like</span>
                </div>
                <div className='postBottomFooterItem'>
                   <MdChatBubbleOutline className='footerIcon'/> 
                   <span className='footerText'>Comment</span>
                </div>
                <div className='postBottomFooterItem'>
                   <MdShare className='footerIcon'/> 
                   <span className='footerText'>Share</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post