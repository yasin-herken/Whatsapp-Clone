import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {AttachFile, SearchOutlined} from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import MicIcon from '@mui/icons-material/Mic';
import React,{useState} from 'react'
import "./Chat.css";
import axios from "./axios";
function Chat({messages}) {
  const [input,setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new",{
      message: input,
      name: "Demo App",
      timeStamp:new Date().toUTCString(),
      received: false
    });
    setInput("");
  };
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
          {
            messages.map((message)=>(
            <p className={"chat__message "+(message.received?"chat__receiver":"")}>
              <span className="chat__name">
                {message.name}
              </span>
              <span>{message.message}</span>
              <span className="chat__timeStamp">{
                message.timeStamp}</span>
            </p>))
          }
        </div>
        <div className="chat__footer">
          <InsertEmoticonIcon />
          <form >
            <input 
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={e =>setInput(e.target.value)}
            />
            <button
            onClick={sendMessage}
            type="submit">
              Send a message
            </button>
          </form>
          <MicIcon />
        </div>
    </div>
  )
}

export default Chat