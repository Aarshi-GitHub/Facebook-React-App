import React, { Component } from 'react'
import './Navbar.css'
import { FaFacebook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import {Link} from "react-router-dom"

class Navbar extends Component{
    render(){

        return (
            <div className="navbarContainer">
                <div className="navbarLeft">
                    <span className='logo'>
                        <Link to="/home">
                            <FaFacebook className='logo-icon'/>
                        </Link>
                    </span>
                </div>
                <div className="navbarCenter">
                    <div className="searchBar">
                        <FaSearch className='searchIcon'/> 
                        <input type="text" className="searchInput" placeholder=" Search Facebook"/>
                    </div>
                </div>
                <div className="navbarRight">
                    <div className="navbarLinks">
                    <Link to="/home" style={{textDecoration:"none",color:"black"}}>
                        <span className='navbarLink'>Homepage</span>
                    </Link>
                    <Link to="/profile/username" style={{textDecoration:"none",color:"black"}}>
                        <span className='navbarLink'>Timeline</span>
                    </Link>
                    </div>
                    <div className="navbarIcons">
                        <div className="navbarIconItem">
                            <BsPersonFill/>
                            <div className="navbarIconBadge">2</div>
                        </div>
                        <div className="navbarIconItem">
                            <BsFillChatDotsFill/>
                            <div className="navbarIconBadge">10</div>
                        </div>
                        <div className="navbarIconItem">
                            <BsBellFill/>
                            <div className="navbarIconBadge">8</div>
                        </div>
                    </div>
                    <Link to="/profile/username">
                    <img src={require("../../assets/person/user.jpg")} alt='User' className='navbarImg'/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar