import { Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";
import Avatar from '@mui/material/Avatar';

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
           <Avatar src="" />
           <input placeholder="what's happening" type="text" />
           {/* <input placeholder="Enter image Url" type="text" /> */}
        </div>
        <input className="tweetBox_imageInput" placeholder="Optional:Enter image Url" type="text" />
        <Button className="tweetBox_tweetBtn">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
