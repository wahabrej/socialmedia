import React from 'react';
import Topber from './Topber';
import Sideber from './Sideber';
import Rightber from './Rightber';
import Feed from './Feed';
import './Home.css'

export default function Home()  {
    return (
        <div>
            <Topber />
            <div className="HomeContainer">
            <Sideber />
            <Feed />
            <Rightber />
            </div>
            
            
        </div>
    );
}


