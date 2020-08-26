import React from 'react'
import { Avatar } from '@material-ui/core'
import  SearchOutlinedIcon  from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css'

const Chat = () => {
    return (
        <div className="chat">
           <div className="chat__header">
            <div className="chat__headerLeft">
                
                <Avatar />
                

            </div>
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                
            </div>

        <div className="chat__headerRight">
        <SearchOutlinedIcon />
            <AttachFileIcon />
            <MoreVertIcon />
        </div>
           </div>

           <div className="chat__body">
            <p className="chat__message">
                <span className="chat__name">Pablo</span>
                Hey Guys
                <span className="chat__timestamp">
                    3:52pm
                </span>
            </p>
            <p className="chat__message">
                <span className="chat__name">Pablosdasds</span>
                Hey Guyssadsadsadsadsadsadsadasasasadsadsadsadsadasdsa
                <span className="chat__timestamp">
                    3:52pm
                </span>
            </p>
            <p className="chat__message chat__receiver">
                <span className="chat__name">Pablosdasds</span>
                Hey Gadsadasdsa
                <span className="chat__timestamp">
                    3:52pm
                </span>
            </p>
           </div>

           

           <div className="chat__input">
            <EmojiEmotionsIcon />
            <form>
            <input type="text" placeholder="Escribe un mensaje aquí"/>
            <button type="submit">Add</button>
            </form>
            <MicIcon />
           </div>
        </div>
    )
}

export default Chat
