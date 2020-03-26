import React from "react";
import "./collection-item.css";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div className="lol">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <div className="addtocart">ADD TO CART</div>
      <div className="collection-footer">
        <span>
          {name}
          {"        "}
        </span>
        <span className="span2">
          {"   "}
          {price}
          {" €  "}
        </span>
      </div>
    </div>
  );
};

export default CollectionItem;
