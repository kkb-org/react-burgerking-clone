import React from "react";
import "./Share.css";
import SnsLinkContainer from "../sns_link_container/SnsLinkContainer";

import youtubeIcon from "../../public/sns/youtube_ic.png";
import youtubeSmIcon from "../../public/sns/youtube_sm_ic.png";
import facebookIcon from "../../public/sns/facebook_ic.png";
import facebookSmIcon from "../../public/sns/facebook_sm_ic.png";
import instagramIcon from "../../public/sns/instagram_ic.png";
import instagramSmIcon from "../../public/sns/instagram_sm_ic.png";

class Share extends React.Component {
  render() {
    return (
      <div className="Share-container">
        <ul>
          <SnsLinkContainer
            title="YOUTUBE"
            status="구독4.9만"
            snsIcon={youtubeIcon}
            snsSmIcon={youtubeSmIcon}
            backgroundSize="13px auto"
            paddingLeft="27px"
          />
          <SnsLinkContainer
            title="FACEBOOK"
            status="좋아요 47.8만"
            snsIcon={facebookIcon}
            snsSmIcon={facebookSmIcon}
            backgroundSize="11.5px auto"
            paddingLeft="23px"
          />
          <SnsLinkContainer
            title="INSTAGRAM"
            status="팔로워 74.9K"
            snsIcon={instagramIcon}
            snsSmIcon={instagramSmIcon}
            backgroundSize="10px auto"
            paddingLeft="23px"
          />
        </ul>
      </div>
    );
  }
}

export default Share;
