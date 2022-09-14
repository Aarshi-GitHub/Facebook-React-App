import React from 'react'
import { Component } from 'react';
import RightbarHome from '../rightbarhome/RightbarHome';
import './RightSide.css'

class RightSide extends Component{
    render(){
        return(
            <div className='rightside'>
                <div className='rightsideContainer'>
                    <RightbarHome/>
                </div>
            </div>
        );
    }
}
export default RightSide