import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.css";
const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-iamge"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="content">
          <h1 className="title">
            {title.toUpperCase()}
            {console.log(imageUrl)}
          </h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
