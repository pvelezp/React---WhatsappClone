import React from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import  SearchOutlinedIcon  from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebar__header">
        <div className="sidebar__headerLeft">
        <Avatar />
        </div>
        <div className="sidebar__headerRight">
         <IconButton>
         <DonutLargeIcon className="sidebar_headerIcon" />
         </IconButton>
        <IconButton>
        <ChatIcon className="sidebar_headerIcon" />
        </IconButton>
        <IconButton>
        <MoreVertIcon className="sidebar_headerIcon" />
        </IconButton>
        </div>

        </div>

        <div className="sidebar__search">
        <div className="sidebar__searchContainer">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search or start a new chat"/>
        </div>
        </div>

        <div className="sidebar__chats">
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        
        </div>
        </div>
    )
}

export default Sidebar
