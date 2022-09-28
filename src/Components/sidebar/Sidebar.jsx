import React from 'react'
import './Sidebar.css'
import { MdRssFeed,
    MdChat,MdVideocam,
    MdOutlinePeopleAlt,MdBookmarkBorder,
    MdShoppingCart,MdEvent,
    MdBrightness4,MdOutlineExitToApp,
    MdKeyboardArrowDown } from "react-icons/md";
import SidebarList from '../sidebarList/SidebarList';
import Friends from '../Friends/Friends';
import {Users} from "../../userData"
import { Link } from 'react-router-dom';

const Sidebar = ({toggleThemeFunc})=>{
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
                    <span onClick={toggleThemeFunc}>
                    <SidebarList Icons={<MdBrightness4 className='sidebarIcon'/>} text="Theme"/>
                    </span>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <SidebarList Icons={<MdOutlineExitToApp className='sidebarIcon'/>} text="Logout"/>
                    </Link>
                    <SidebarList Icons={<MdKeyboardArrowDown className='sidebarIconMore'/>} text="Show More"/>
                    <hr className='sidebarHr' color='lightgrey'/>
                    <ul className="sidebarFriendList">
                        {Users.map((user)=><Friends key={user.id} friend={user}/>)}
                    </ul>
                </div>
            </div>
        );
}
export default Sidebar;