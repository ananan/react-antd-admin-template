import React from "react";
import logo from "@/assets/images/logo.svg";
import "./index.less";
const Logo = () => {
  return (
    <div className="sidebar-logo-container">
        <a href='/dashboard'>
            <img src={logo} className="sidebar-logo" alt="logo" />
            <h1 className="sidebar-title">Shopee VMP</h1>
        </a>

    </div>
  );
};

export default Logo;
