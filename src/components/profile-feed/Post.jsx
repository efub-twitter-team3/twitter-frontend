import React from "react";
import "./Post.css";
import {OptionIcon,ReplyIcon,ReTweetIcon,LikeIcon,ShareIcon} from '../Icons';
import ProfileImg from "../../assets/images/profileImg.jpg"



import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const Post = ({ nickname, userId, identifier, date, content }) => {
  return (
    <div className="post">
      <img className="post__profileimg" src={ProfileImg} />

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
          {ReplyIcon}{ReTweetIcon}{LikeIcon}{ShareIcon}
        </div>
      </div>

      <button className="OptionButton">{OptionIcon}</button> {/*onClick={openModal}*/}

    </div>
  );
};

export default Post;
