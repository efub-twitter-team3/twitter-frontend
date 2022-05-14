import React from "react";

import "./SidebarCate.css";

import { NavLink } from "react-router-dom";

const SidebarCate = ({ Icon, text, isLink }) => {
  return (
    isLink ? (
      isLink === 1 ? (
        <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="sidebarcate">
          <div className="sidebarcate__icon">{Icon}</div>
          <span className="sidebarcate__text">{text}</span>
        </div>
        </NavLink>
      ) : (
        <NavLink to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="sidebarcate">
          <div className="sidebarcate__icon">{Icon}</div>
          <span className="sidebarcate__text">{text}</span>
        </div>
        </NavLink>
      )
    ) : (
    <div className="sidebarcate">
      <div className="sidebarcate__icon">{Icon}</div>
      <span className="sidebarcate__text">{text}</span>
    </div>
    )
  );
};

export default SidebarCate;
