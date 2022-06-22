import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {AttachFile, SearchOutlined, SettingsInputAntenna} from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import MicIcon from '@mui/icons-material/Mic';
import React from 'react'
import "./Chat.css";
function Chat() {
  return (
    <div className='chat'>
        <div className="chat__header">
          <Avatar />
          <div className="chat__headerInfo">
            <h3>Room Name</h3>
            <p>Last seen at...</p>
          </div>
          <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile fontSize='large'/>
            </IconButton>
            <IconButton>
              <MoreVertIcon fontSize='large'/>
            </IconButton>
          </div>
        </div>
        <div className="chat__body">
          <p className="chat__message">
            <span class="chat__name">Sonny</span>
            <span>This is a message</span>
            <span className="chat__timestamp">
              {new Date().toUTCString()}
            </span>
          </p>
          <p className="chat__message chat__receiver">
            <span class="chat__name">Sonny</span>
            <span>This is a message</span>
            <span className="chat__timestamp">
              {new Date().toUTCString()}
            </span>
          </p>
          <p className="chat__message">
            <span class="chat__name">Sonny</span>
            <span>This is a message</span>
            <span className="chat__timestamp">
              {new Date().toUTCString()}
            </span>
          </p>
        </div>
        <div className="chat__footer">
          <InsertEmoticonIcon />
          <form >
            <input 
            placeholder="Type a message"
            type="text"
            />
            <button type="submit">
              Send a message
            </button>
          </form>
          <MicIcon />
        </div>
    </div>
  )
}

export default Chat