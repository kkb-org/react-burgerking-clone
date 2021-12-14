import React from "react";
import "./HomeGuideItem.css";

const HomeGuideItem = (props: any) => {
  return (
    <div
      className="Home-guide-item"
      style={{
        backgroundColor: props.backgroundColor,
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    ></div>
  );
};

export default HomeGuideItem;
