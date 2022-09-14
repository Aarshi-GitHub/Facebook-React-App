import React from 'react'
import { Component } from 'react';
import './Sidebar.css'
import { MdRssFeed } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { MdVideocam } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { MdBrightness4 } from "react-icons/md";
import { MdOutlineExitToApp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import SidebarList from '../sidebarList/SidebarList';
import Friends from '../Friends/Friends';
import {Users} from "../../userData"

class Sidebar extends Component{
    render(){
        return(
            <div className='sidebar'>
                <div className="sidebarContainer">
                    <SidebarList Icons={<MdRssFeed className='sidebarIcon'/>} text="Feed"/>
                    <SidebarList Icons={<MdChat className='sidebarIcon'/>} text="Chats"/>
                    <SidebarList Icons={<MdVideocam className='sidebarIcon'/>} text="Videos"/>
                    <SidebarList Icons={<MdOutlinePeopleAlt className='sidebarIcon'/>} text="Friends"/>
                    <SidebarList Icons={<MdBookmarkBorder className='sidebarIcon'/>} text="Bookmarks"/>
                    <SidebarList Icons={<MdShoppingCart className='sidebarIcon'/>} text="Marketplace"/>
                    <SidebarList Icons={<MdEvent className='sidebarIcon'/>} text="Events"/>
                    <SidebarList Icons={<MdBrightness4 className='sidebarIcon'/>} text="Theme"/>
                    <SidebarList Icons={<MdOutlineExitToApp className='sidebarIcon'/>} text="Logout"/>
                    <SidebarList Icons={<MdKeyboardArrowDown className='sidebarIconMore'/>} text="Show More"/>
                    <hr className='sidebarHr' color='lightgrey'/>
                    <ul className="sidebarFriendList">
                        {Users.map((user)=><Friends key={user.id} friend={user}/>)}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Sidebar;