import React from "react";
import "./ProfilePage.css"

import Sidebar from "../components/sidebar/Sidebar";
import ProfileFeed from "./profile-feed/ProfileFeed";
import RightNav from "./RightNav";

const ProfilePage = () => {
  return (
    <div className="profilepage">
      <Sidebar className="sidebar__compo" />
      <ProfileFeed className="profilefeed__compo" />
      <RightNav/>
    </div>
  );
};

export default ProfilePage;
