import React, { useState, useEffect } from "react";

import Post from "./Post";
import PostInfo from "./PostInfo";
import "./ProfileFeed.css"
import {ArrowIcon} from '../Icons';

import axios from "axios";


const ProfileFeed = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await axios.get("/users/1/posts") //userId=1로 고정
    .then(res => setPosts(res['data'].reverse()))
    .catch(e => console.log(response))
  };

  useEffect(() => {
    getPosts();
  }, [posts]);


  const [nameInfo, setInfo] = useState(''); 

  const editedNameInfo = async () => {
    const response = await axios.get("/users/1")
    .then(res => setInfo(res.data))
    .catch(e => console.log(response))
  }; 

  useEffect(() => {
    editedNameInfo();
  }, [nameInfo]);  


  return (
    <div className="profilefeed">

      <div className="profilefeed__header">
        <div className="profilefeed__header__left">
          <div className="arrowicon">{ArrowIcon}</div>
        </div>
        <div className="profilefeed__header__right">  
          <p className="profilefeed__nickname">{nameInfo.nickname}</p>
          <p className="tweetsCount">2 트윗</p>
        </div>
      </div>

      <PostInfo />

      <div className="profilefeed__cate">
        <p className="cate__text active">트윗</p>
        <p className="cate__text">트윗 및 답글</p>
        <p className="cate__text">미디어</p>
        <p className="cate__text">마음에 들어요</p>
      </div>

      {posts.map((p) => (
        <Post
          key={p.postId}
          post={p}
        />
      ))}
    </div>
  );
};

export default ProfileFeed;
