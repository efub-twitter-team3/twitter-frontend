import React, {useState,useEffect} from "react";

import SidebarCate from "./SidebarCate";

import "./Sidebar.css" 
import ProfileImg from "../../assets/images/profileImg.jpg"
import axios from "axios";

import TweetModal from './TweetModal';


import {TwitterIcon,HomeIcon,ExploreIcon,NotificationIcon,MessageIcon,BookmarkIcon,ListIcon,HumanIcon,MoreIcon,OptionIcon} from '../Icons';


const Sidebar = () => {
  const [nameInfo, setInfo] = useState(''); 

  const editedNameInfo = async () => {
    const response = await axios.get("/users/1")
    .then(res => setInfo(res.data))
    .catch(e => console.log(response))
  }; 

  useEffect(() => {
    editedNameInfo();
  }, [nameInfo]);  

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }



  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div>
          {TwitterIcon}
        </div>

        <div>
          <SidebarCate Icon={HomeIcon} text="홈" isLink={1}></SidebarCate>
          <SidebarCate Icon={ExploreIcon} text="탐색하기" isLink={0}/>
          <SidebarCate Icon={NotificationIcon} text="알림" isLink={0}/>
          <SidebarCate Icon={MessageIcon} text="쪽지" isLink={0}/>
          <SidebarCate Icon={BookmarkIcon} text="북마크" isLink={0}/>
          <SidebarCate Icon={ListIcon} text="리스트" isLink={0}/>
          <SidebarCate Icon={HumanIcon} text="프로필" isLink={2}></SidebarCate>
          <SidebarCate Icon={MoreIcon} text="더 보기" isLink={0}/>
        </div>

        <div onClick={e => e.stopPropagation()}>
          <button onClick={openModal} className="sidebar__tweetbutton">트윗하기</button>
        </div>
        {showModal && <TweetModal isOpenModal={showModal} setIsOpenModal={setShowModal}/>}

      </div>

      <div className="sidebar__bottom">
        <div className="bottom__left">
          <img className="bottom__profileimg" src={ProfileImg} />
        </div>
        <div className="bottom__right">
          <p className="bottom__nickname">{nameInfo.nickname}</p>
          <p className="bottom__userid">@testIdentifier</p>
        </div>
        <div className="sidebar__optionicon">{OptionIcon}</div>
      </div>
    </div>
  );
};

export default Sidebar;
