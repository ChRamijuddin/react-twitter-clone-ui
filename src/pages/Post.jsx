import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = (displayName,
    username,
    verified,
    text,
    imgae,
    avatar) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            <span>Ramij Ch</span>
                            <span className="post__headerSpecial">
                                <VerifiedIcon className="post__badge" />
                                <span className='special_badge'>@ramijch</span>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Coding chellenge for building up twitter clone in React</p>
                    </div>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
