import React , {useState, useEffect} from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import  SearchOutlinedIcon  from '@material-ui/icons/SearchOutlined';

import SidebarChat from './SidebarChat';

import  db from './firebase.js';
import { useStateValue } from './StateProvider';


const Sidebar = () => {

    const [rooms, setRooms] = useState([])
    const [{user}, dispatch] = useStateValue()

    useEffect(() => {
       const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })

        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <div className="sidebar">
        <div className="sidebar__header">
        <div className="sidebar__headerLeft">
        <Avatar 
        
        src={user?.photoURL}
        />
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
        {rooms.map(({id,data}) => (
            <SidebarChat key={id} id={id} name={data.name}/>
        ))}
        
        </div>
        </div>
    )
}

export default Sidebar
