import React, { useState, useEffect } from "react";

import Post from "./Post";
import PostInfo from "./PostInfo";
import "./ProfileFeed.css"

const ProfileFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //무한루프에 빠져서 렌더링 안돼서, setPosts를 useEffect 안에 넣어줌
    setPosts([
      {
        postId: 1,
        userId: "fub2fub",
        nickname: "퍼비",
        identifier: true,
        date: "2020-01-04 12:23:56",
        content: "테스트",
      },
      {
        postId: 12,
        userId: "fub2fub",
        nickname: "퍼비",
        identifier: true,
        bio: "",
        date: "2020-02-04 10:53:26",
        content: "하이",
      },
    ]);
  }, []);

  return (
    <div className="profilefeed">
      <div className="profilefeed__header">
        <p className="profilefeed__nickname">퍼비</p>
        <p className="tweetsCount">2 트윗</p>
      </div>

      <PostInfo />

      <div className="profilefeed__cate">
        <p className="cate__text active">트윗</p>
        <p className="cate__text">트윗 및 답글</p>
        <p className="cate__text">미디어</p>
        <p className="cate__text">마음에 들어요</p>
      </div>

      {posts.map((post) => (
        <Post
          key={post.postId}
          nickname={post.nickname}
          userId={post.userId}
          identifier={post.identifier}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default ProfileFeed;
