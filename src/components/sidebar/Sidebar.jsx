import React from "react";

import SidebarCate from "./SidebarCate";

import "./Sidebar.css" 

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="twitterIcon__box">
          <TwitterIcon className="twitterIcon" />
        </div>

        <div>
          <SidebarCate Icon={HomeIcon} text="홈" isLink={1}></SidebarCate>
          <SidebarCate Icon={SearchIcon} text="탐색하기" isLink={0}/>
          <SidebarCate Icon={NotificationsNoneIcon} text="알림" isLink={0}/>
          <SidebarCate Icon={MailOutlineIcon} text="쪽지" isLink={0}/>
          <SidebarCate Icon={BookmarkBorderIcon} text="북마크" isLink={0}/>
          <SidebarCate Icon={ListAltIcon} text="리스트" isLink={0}/>
          <SidebarCate Icon={PermIdentityIcon} text="프로필" isLink={2}></SidebarCate>
          <SidebarCate Icon={MoreHorizIcon} text="더 보기" isLink={0}/>
        </div>

        <button className="sidebar__tweetbutton">트윗하기</button>
      </div>

      <div className="sidebar__bottom">
        <div className="bottom__left">
          <img className="bottom__profileimg" src="" alt="" />
        </div>
        <div className="bottom__right">
          <p className="bottom__nickname">퍼비</p>
          <p className="bottom__userid">@fub2fub</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
