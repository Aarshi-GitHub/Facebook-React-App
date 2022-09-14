import React from 'react'
import { Component } from 'react';
import Story from '../story/Story.jsx';
import Share from "../share/Share"
import './Feed.css'
import Post from '../post/Post.jsx';
import {Posts} from "../../userData";

class Feed extends Component{
    render(){
        return(
            <div className='feed'>
                <div className="feedContainer">
                    <Story/>
                    <Share/>
                    {Posts.map((p)=>(
                        <Post key={p.id} post={p}/>
                    ))}
                </div>
            </div>
        );
    }
}
export default Feed;