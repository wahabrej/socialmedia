import React from 'react';
import  './Topber.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import srk from '../images/srk.jpg';

import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

export default function Topber() {
  return (
   <div className="topbercontainer">
    <div className="topberleft">
        <span className="logo">Social<b>M</b>edia</span>
    </div>
    <div className="topbercenter">
       <div className="searchber">
       <SearchIcon  className='searchicon' /> 
       <input type="text" className='searchinput' placeholder='Search your friends'  />
    
       </div>
    </div>
    <div className="topberright">
       <span className="topberlink">Hompage </span>
       <span className="topberlink">Timeline</span>
    </div>
    <div className="topbericon">
        <div className="topbericonitem">
            <PersonIcon />
            <span className="topbericonbadge">1</span>
        </div>
        <div className="topbericonitem">
            <ChatIcon />
            <span className="topbericonbadge">1</span>
        </div>
        <div className="topbericonitem">
            <CircleNotificationsIcon />
            <span className="topbericonbadge">1</span>
           
        </div>
        
        <img className='srk' src={srk} alt="" />
      


    </div>
   </div>
  )
}
