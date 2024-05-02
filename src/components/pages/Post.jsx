import React from 'react'
import './Post.css'
import wahab from '../images/image.PNG'
import srk from '../images/srk.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';
import Heart from '../images/heart.png';
import like from '../images/like.jpg';
export default function Post({data}) {
    console.log(data);
  return (
    <div className="post">
        <div className="postwrapper">
            <div className="posttop">
                <div className="topleft">
                <img src={data.image} alt="" className='postuserimg' />
               <span className='postusername'>{data.name}</span>
               <span className='postdate'>5 mins ago</span>
                </div>
                <div className="topright"><MoreVertIcon className='toprightimg'/></div>
            
            </div>
            <div className="postcenter">
                <span className="postcentertext"> {data.desc}</span>
                <img src={data.image} alt="" className="postcenterimg" />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
              
                  <img src={Heart} alt="" className="postbottomleftimg" />
                  <img src={like} alt="" className="postbottomleftimg" />
                  <span className="postbottomlefttext">{data.count} people like it's</span>
                </div>
              
                <div className="postbottomcenter">
                <CommentIcon className='postbottomlefticon' />
                    <span className="postbottomlefttext">{data.count}Comment</span>
                </div>
                <div className="postbottomright">
                <ReplyIcon className='postbottomlefticon' />
                    <span className="postbottomlefttext">Share</span>
                </div>
            </div>
        </div>
    </div>
  )
}
