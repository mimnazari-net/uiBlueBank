import React from "react";
import logo from "./images/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <img src={logo} alt="blu bank logo"></img>
        </div>
        <ul className="menue">
          <li>
            <a>بلو جونیور</a>
          </li>
          <li>
            <a> موقعیت شغلی </a>
          </li>
          <li>
            <a> سوالات متداول </a>
          </li>
          <li>
            <a>بلاگ</a>
          </li>
          <li>
            <a>درباره ما</a>
          </li>
        </ul>
        <div className="right">
          <button> بازکردن حساب بلو</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
