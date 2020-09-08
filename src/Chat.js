import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import  SearchOutlinedIcon  from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css'
import { useParams} from 'react-router-dom'
import db from './firebase';
import firebase from 'firebase'
import { useStateValue } from './StateProvider';

const Chat = () => {
    const {roomId} = useParams()
    const [input, setInput] = useState('')

    const [roomName, setRoomName] = useState('')
    const [messages, setMessages] = useState([])
    const [{user}, dispatch] = useStateValue()
    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).
            onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))

        db.collection('rooms').doc(roomId).
        collection('messages').orderBy
        ('timestamp', 'asc').onSnapshot(snapshot => (
            setMessages(snapshot.docs.map(doc => ({
                data:  doc.data(),
                id: doc.id
            })))
        ))


        }
      
    }, [roomId])

        const sendMessage = e => {
            e.preventDefault()
            db.collection('rooms').doc(roomId).collection('messages').add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
           setInput('') 
        }

    return (
        <div className="chat">
           <div className="chat__header">
            <div className="chat__headerLeft">
                
                <Avatar />
                

            </div>
            <div className="chat__headerInfo">
    <h3>{roomName}</h3>
                last seen{" "}
                {new Date(
                    messages[messages.length - 1]?.
                    data.timestamp?.toDate()).toUTCString()}
             
            </div>

        <div className="chat__headerRight">
        <SearchOutlinedIcon />
            <AttachFileIcon />
            <MoreVertIcon />
        </div>
           </div>

           <div className="chat__body">
        {messages.map(({data,id}) => (
                        <p 
                        
                        key={id}
                        className={`chat__message ${
                            data.name === user.displayName && 'chat__receiver'
                        }`}>
                        <span className="chat__name">{data.name}</span>
                        {data.message}
                        <span className="chat__timestamp">
                            {new Date(data.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
        ))}
           
           </div>

           

           <div className="chat__input">
            <EmojiEmotionsIcon />
            <form
            onSubmit={sendMessage}
            >
            <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text" placeholder="Send a message here"/>
            <button type="submit">Add</button>
            </form>
            <MicIcon />
           </div>
        </div>
    )
}

export default Chat
