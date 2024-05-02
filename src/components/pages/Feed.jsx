import React from 'react'
import './Feed.css'
import Share from './Share'
import Post from './Post'
import { data } from './data';
export default function Feed() {
  return (
    <div className='feed'>

      <div className="feedwrapper">
        <Share />
        {/* {data.map((p) => (

          <Post key={p.id} data={p} />
        ))} */}


        {data.map((p) => (
          <Post key={p.id} data={p} />
        ))};

      </div>
    </div>
  )
}
