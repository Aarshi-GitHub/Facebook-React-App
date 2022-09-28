import React from 'react'
import ProfileRightSide from '../profileRightSide/ProfileRightSide';
import RightbarHome from '../rightbarhome/RightbarHome';
import './RightSide.css'

const RightSide = ({profile}) => {
    return(
        <div className='rightside'>
            <div className='rightsideContainer'>
                {profile ? <ProfileRightSide/>:<RightbarHome/>}
            </div>
        </div>
    );
}
export default RightSide