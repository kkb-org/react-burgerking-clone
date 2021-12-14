import React from "react";
import "./HomeGuide.css";
import HomeGuideItem from "./HomeGuideItem/HomeGuideItem";
import introApp from "../../public/intro/intro_app.png";
import introDelivery from "../../public/intro/intro_delivery.png";
import introAppExtended from "../../public/intro/intro_app_extended.png";
import introDeliveryExtended from "../../public/intro/intro_delivery_extended.png";
import { useMediaQuery } from "react-responsive";

const HomeGuide = (props: any) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  let elements;
  if (isMobile) {
    elements = [
      <HomeGuideItem backgroundColor="#c7a186" backgroundImage={introApp} />,
      <HomeGuideItem
        backgroundColor="#b08972"
        backgroundImage={introDelivery}
      />,
    ];
  } else {
    elements = [
      <HomeGuideItem
        backgroundColor="#c7a186"
        backgroundImage={introAppExtended}
      />,
      <HomeGuideItem
        backgroundColor="#b08972"
        backgroundImage={introDeliveryExtended}
      />,
    ];
  }

  return <div className="Home-guide">{elements}</div>;
};

export default HomeGuide;
