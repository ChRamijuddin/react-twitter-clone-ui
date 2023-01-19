import React from 'react'
import Post from '../../pages/Post'
import TweetBox from '../../pages/TweetBox'
import './Feed.css'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post />
    </div>
  )
}

export default Feed
