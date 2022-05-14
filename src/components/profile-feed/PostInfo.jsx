import React from "react";
import "./PostInfo.css";
import CoverImg from "../../assets/images/coverImg.jpg"
import ProfileImg from "../../assets/images/profileImg.jpg"

import {SignupIcon} from '../Icons';


const PostInfo = () => {
  return (
    <div className="postinfo">
      <img className="postinfo__coverimg" src={CoverImg} alt="cover" />
      <img className="postinfo__profileimg" src={ProfileImg} alt="profile" />

      <button className="postinfo__editbutton">
        프로필 수정
      </button>

      <div className="postinfo__bottom">
        <div className="postinfo__nameid">
          <span className="postinfo__nickname">퍼비</span>
          <span className="postinfo__userid">@fub2fub</span>
        </div>

        <p className="postinfo__bio">안녕 퍼비들</p>

        <p className="postinfo__signup">{SignupIcon}가입일: 2022년 1월 1일</p>

        <div className="postinfo__follow">
          <span>1 팔로우 중</span>
          <span>0 팔로워</span>
        </div>
      </div>  
    </div> 
  );
};

export default PostInfo;
