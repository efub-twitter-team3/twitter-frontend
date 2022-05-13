import React from "react";

import "./SidebarCate.css";

const SidebarCate = ({ Icon, text }) => {
  return (
    <div className="sidebarcate">
      <Icon className="sidebarcate__icon" />
      <span className="sidebarcate__text">{text}</span>
    </div>
  );
};

export default SidebarCate;
