import React, {useState, useEffect} from "react";
import "./PostInfo.css";
import CoverImg from "../../assets/images/coverImg.jpg"
import ProfileImg from "../../assets/images/profileImg.jpg"

import EditModal from "./EditModal";

import {SignupIcon} from '../Icons';
import axios from "axios";


const PostInfo = () => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(true);
  }


  const [info, setInfo] = useState(''); 

  const editedInfo = async () => {
    const response = await axios.get("/users/1")
    .then(res => setInfo(res.data))
    .catch(e => console.log(response))
  }; 

  useEffect(() => {
    editedInfo();
  }, [info]);  



  return (
    <div className="postinfo">
      <img className="postinfo__coverimg" src={CoverImg} alt="cover" />
      <img className="postinfo__profileimg" src={ProfileImg} alt="profile" />

      <div onClick={e => e.stopPropagation()}>
        <button className="postinfo__editbutton" onClick={openModal}>
          프로필 수정
        </button>
      </div>
      {showModal && <EditModal currentName={info.nickname} isOpenModal={showModal} setIsOpenModal={setShowModal}/>}


      <div className="postinfo__bottom">
        <div className="postinfo__nameid">
          <span className="postinfo__nickname">{info.nickname}</span> 
          <span className="postinfo__userid">@testIdentifier</span>
        </div>

        <p className="postinfo__bio">{info.bio}</p>

        <p className="postinfo__signup">{SignupIcon}가입일: 2022년 1월 1일</p>

        <div className="postinfo__follow">
          <span>2 팔로우 중</span>
          <span>0 팔로워</span>
        </div>
      </div>  
    </div> 
  );
};

export default PostInfo;
