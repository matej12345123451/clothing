import React from "react";
import "./menu-item.css";
const MenuItem = ({ title, url }) => {
  return (
    <div className="menu-item">
      <div
        className="background-iamge"
        style={{ backgroundImage: `url(${url})` }}
      >
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
