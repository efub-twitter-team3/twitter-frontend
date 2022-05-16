import React from "react";

import "./SidebarCate.css";

import { NavLink } from "react-router-dom";

import {HomeIcon_fill, HumanIcon_fill} from '../Icons';


const SidebarCate = ({ Icon, text, isLink }) => {
  return (
    isLink ? (
      isLink === 1 ? (
        <NavLink to="/" style={({ isActive }) => ({ textDecoration: 'none', color: 'black', fontWeight: isActive ? 'bold' : 'normal' })}>
        <div className="sidebarcate">
          <div className="sidebarcate__icon">{window.location.href.split('/').reverse()[0] === '' ? HomeIcon_fill : Icon}</div>
          <span className="sidebarcate__text">{text}</span>
        </div>
        </NavLink>
      ) : (
        <NavLink to="/profile" style={({ isActive }) => ({ textDecoration: 'none', color: 'black', fontWeight: isActive ? 'bold' : 'normal' })} >
        <div className="sidebarcate">
          <div className="sidebarcate__icon">{window.location.href.split('/').reverse()[0] === 'profile' ? HumanIcon_fill : Icon}</div>
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
