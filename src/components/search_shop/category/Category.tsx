import React from "react";
import "./Category.css";

const Category = (props: any) => {
  return (
    <li
      className="Category"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <em>{props.text}</em>
    </li>
  );
};

export default Category;
