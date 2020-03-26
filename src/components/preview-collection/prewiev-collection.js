import React from "react";
import "./prewiev-collection.css";
import CollectionItem from "../collection-Item/collection-item";
const PreviewColection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((no, idx) => idx < 4)
          .map(({ id, ...ostali }) => {
            return <CollectionItem key={id} {...ostali} />;
          })}
      </div>
    </div>
  );
};

export default PreviewColection;
