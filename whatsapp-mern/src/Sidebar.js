import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge"
import { Avatar,IconButton } from '@mui/material';
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {SearchOutlined} from '@mui/icons-material';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <Avatar
              src= "https://github.com/jonrohan.png?v=3&s=96" width="48"
            />
            <div className="sidebar__headerRight">
              <IconButton>
                <DonutLargeIcon fontSize='large'/>
              </IconButton>
              <IconButton>
                <ChatIcon fontSize='large'/>
              </IconButton>
              <IconButton>
                <MoreVertIcon fontSize='large'/>
              </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined />
            <input placeholder='Search or start new chat' type="text" />
          </div>
        </div>
        <div className="sidebar__chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar;