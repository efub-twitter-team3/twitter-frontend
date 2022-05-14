import React from "react";
import "./Post.css";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({ nickname, userId, identifier, date, content }) => {
  return (
    <div className="post">
      <img className="post__profileimg" src="" />

      <div className="post__right">
        <div className="post__header">
          <span className="post__nickname">{nickname}</span>
          <span className="post__userid">
            @{userId}
          </span>
          <span className="post__date">{date}</span>
        </div>
        <p className="post__content">{content}</p>
        <div className="post__icon">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
