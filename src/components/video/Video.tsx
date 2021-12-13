import React from "react";
import "./Video.css";

class Video extends React.Component {
  render() {
    return (
      <div>
        <iframe
          className="Youtube-video"
          src={
            "https://www.youtube.com/embed/AeDPdqHbF3w?rel=0&showinfo=0&autoplay=0"
          }
        ></iframe>
      </div>
    );
  }
}

export default Video;
