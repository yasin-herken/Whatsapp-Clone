//importing
import express from 'express';
import mongoose from 'mongoose';
import {pusher,key} from './config.js';
import Messages from './dbChat.js';
import Pusher from 'pusher';
import cors from 'cors';
//app config
const app = express();
const port = process.env.PORT || 8000;
//middleware
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    next();
});
app.use(cors());


//DB config
const connection_url = "mongodb+srv://admin:" + key + "@cluster0.mj82ul2.mongodb.net/chatDb?retryWrites=true&w=majority";

mongoose.connect(connection_url,{
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open',()=>{
    console.log('DB connected');
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();
    changeStream.on('change',(change)=>{

        if(change.operationType==='insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted',
                {
                    name: messageDetails.user,
                    message: messageDetails.message,
                    timeStamp: messageDetails.timeStamp,
                    received: messageDetails.received
                }
            );
        }else{
            console.log('Error triggering Pusher');
        }
    });
})
mongoose
//api routes
app.get("/",(req,res)=>res.status(200).send("Hello World"));

app.get("/messages",(req,res)=>{
    const dbMessage = req.body;

    Messages.find(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.post("/messages/new",(req,res)=>{
    const dbMessage = req.body;

    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send("new message created: "+data);
        }
    })
})

//listener
app.listen(port,()=>console.log("Listening to port"+port));