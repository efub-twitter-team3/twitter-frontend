import React, {useState} from "react";
import "./Post.css";
import {OptionIcon,ReplyIcon,ReTweetIcon,LikeIcon,ShareIcon} from '../Icons';
import ProfileImg from "../../assets/images/profileImg.jpg"
import Modal from "./Modal";

const Post = ({post}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }

  return (
    <div className="post">
      <img className="post__profileimg" src={ProfileImg} />

      <div className="post__right">
        <div className="post__header">
          <span className="post__nickname">{post.user.nickname}</span>
          <span className="post__identifier">
            @{post.user.identifier}
          </span>
          <span className="post__date">{post.date}</span>
        </div>
        <p className="post__content">{post.content}</p>
        <div className="post__icon">
          {ReplyIcon}{ReTweetIcon}{LikeIcon}{ShareIcon}
        </div>
      </div>


      <div onClick={e => e.stopPropagation()}>
        <button className="OptionButton" onClick={openModal}>{OptionIcon}</button>
      </div>
      {showModal && <Modal isOpenModal={showModal} setIsOpenModal={setShowModal} id={post.postId}/>}


    </div>
  );
};

export default Post;
