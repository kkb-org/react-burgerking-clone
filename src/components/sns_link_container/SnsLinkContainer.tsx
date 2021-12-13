import React from "react";
import "./SnsLinkContainer.css";

const SnsLinkContainer = (props: any) => {
  return (
    <li>
      <div className="Sns-container" style={{
        backgroundImage: `url(${props.snsIcon})`,
      }}>
        <strong className="Sns-title">{props.title}</strong>
        <strong className="Status" style={{
          backgroundImage: `url(${props.snsSmIcon})`,
          backgroundSize: props.backgroundSize,
          paddingLeft: props.paddingLeft,
        }}>
          {props.status}
        </strong>
      </div>
    </li>
  );
};

export default SnsLinkContainer;
