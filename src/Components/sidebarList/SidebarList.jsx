import React from 'react'
import { Component } from 'react';
import './SidebarList.css'


class SidebarList extends Component{
    render(){
        return(
            <div className="sidebarListItem">
                {this.props.Icons}
                <span className="sidebarListItemText"> {this.props.text} </span>
            </div>
                  
        );
    }
}
export default SidebarList;