import React from 'react'
import './Share.css'
import srk from '../images/srk.jpg';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import TagIcon from '@mui/icons-material/Tag';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
export default function Share() {
  return (
    <div className='share'>
        <div className="sherewrapper">
            <div className="sheretop">
                <img src={srk} alt="" className='shareimg' />
                <input type="text" placeholder="what's your mind ?" className='shareinput' />
            </div>
            <hr />
            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <PermMediaIcon htmlColor='tomato' className='shareicon' />
                        <span className="shareOptiontext">Vedio</span>
                    </div>
                    <div className="shareoption">
                        <TagIcon htmlColor='blue' className='shareicon' />
                        <span className="shareOptiontext">Tag</span>
                    </div>
                    <div className="shareoption">
                        <EditLocationIcon htmlColor='green' className='shareicon' />
                        <span className="shareOptiontext">Location</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotionsIcon htmlColor='gold' className='shareicon' />
                        <span className="shareOptiontext">Feeling</span>
                    </div>
                    <div className="shareoption">
                    <button className='shareButton'>Share</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
