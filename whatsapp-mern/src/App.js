import React, { useEffect ,useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios.js';
function App() {
  const [messages,setMessages] = useState([]);
  useEffect(()=>{
    axios.get("/messages/")
    .then(response =>{
      setMessages(response.data);
    })
  });

  useEffect(()=>{
    const pusher = new Pusher('1b6bba58427e8106970b', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
      setMessages([...messages,data]);
    });
  },[messages]);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
