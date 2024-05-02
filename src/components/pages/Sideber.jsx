import React from 'react';
import './Sideber.css';
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import srk from '../images/srk.jpg';
export default function Sideber() {
  return (
    <div className='sideber'>
        <div className="sideberwrapper">
            <ul>
                <li className='sideberListItem'>
                    <FeedIcon className='sideberIcon' />
                    <span className="sideberItemListtext">Feed</span>

                </li>
                <li className='sideberListItem'>
                    <ChatIcon className='sideberIcon' />
                    <span className="sideberItemListtext">Chat</span>

                </li>
                <li className='sideberListItem'>
                    <OndemandVideoIcon className='sideberIcon' />
                    <span className="sideberItemListtext">Vedio</span>

                </li>
                <li className='sideberListItem'>
                    <GroupsIcon className='sideberIcon' />
                    <span className="sideberItemListtext">Group</span>

                </li>
                <li className='sideberListItem'>
                    <BookmarkIcon className='sideberIcon' />
                    <span className="sideberItemListtext">BookMark</span>

                </li>
                <li className='sideberListItem'>
                    <QuestionMarkIcon className='sideberIcon' />
                    <span className="sideberItemListtext">Question</span>

                </li>
                <li className='sideberListItem'>
                    <WorkIcon className='sideberIcon' />
                    <span className="sideberItemListtext">Work</span>

                </li>
                <li className='sideberListItem'>
                <button className='sidberbutton'>Show More</button>

                </li>
               
            </ul>
           
            <hr className='sidberhr' />
            <ul className="sidberfriendlist">
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <span className="active">.</span>
                    <spane className="friendname">Karim</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <span className="active">.</span>
                    <spane className="friendname">Rahim</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <span className="active">.</span>
                    <spane className="friendname">Samad</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <span className="active">.</span>
                    <spane className="friendname">Farhan</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <span className="active">.</span>
                    <spane className="friendname">Wahab</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Sohan</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <span className="active">.</span>
                    <spane className="friendname">Karim</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Arefin</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <span className="active">.</span>
                    <spane className="friendname">Didar</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Karim</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Karim</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Rahim</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Samad</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Farhan</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Wahab</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Sohan</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Karim</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Arefin</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Didar</spane>
                </li>
                <li className="sideberfriend">
                    <img className='friendimg' src={srk} alt="" />
                    <spane className="friendname">Karim</spane>
                </li>
            </ul>
        </div>
    
    </div>
  )
}
