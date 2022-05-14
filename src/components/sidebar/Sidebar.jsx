import React from "react";

import SidebarCate from "./SidebarCate";

import "./Sidebar.css" 
import ProfileImg from "../../assets/images/profileImg.jpg"


import {TwitterIcon,HomeIcon,ExploreIcon,NotificationIcon,MessageIcon,BookmarkIcon,ListIcon,HumanIcon,MoreIcon,OptionIcon} from '../Icons';


const Sidebar = () => {
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

        <button className="sidebar__tweetbutton">트윗하기</button>
      </div>

      <div className="sidebar__bottom">
        <div className="bottom__left">
          <img className="bottom__profileimg" src={ProfileImg} />
        </div>
        <div className="bottom__right">
          <p className="bottom__nickname">퍼비</p>
          <p className="bottom__userid">@fub2fub</p>
        </div>
        <div className="sidebar__optionicon">{OptionIcon}</div>
      </div>
    </div>
  );
};

export default Sidebar;
