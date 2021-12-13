import React from "react";
import "./Share.css";

class Share extends React.Component {
  render() {
    return (
      <div className="Share-container">
        <ul>
          <li className="Youtube"></li>
          <li className="Facebook"></li>
          <li className="Instagram"></li>
        </ul>
      </div>
    );
  }
}

export default Share;
