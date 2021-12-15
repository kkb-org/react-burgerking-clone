import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import Header from "./components/headers/Header";
import ExtendedHeader from "./components/headers/ExtendedHeader";
import Video from "./components/video/Video";
import Share from "./components/share/Share";
import HomeGuide from "./components/home_guide/HomeGuide";
import SearchShop from "./components/search_shop/SearchShop";

import toTopImg from "./public/to_top.png";
import HomeCS from "./components/home_cs/HomeCS";
import Footer from "./components/footer/Footer";

function App() {
  const Top = styled.a`
    position: fixed;
    width: 52px;
    height: 52px;
    text-indent: -9999em;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    z-index: 50;
    background-image: url(${toTopImg});
    background-repeat: no-repeat;
    background-position: 0 0;

    @media screen and (max-width: 768px) {
      right: 2px;
      bottom: 58px;
      background-size: 26px auto;
    }
  `;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <div className="App">
      <Header />
      <ExtendedHeader />

      <Video />
      <Share />
      <HomeGuide />
      <SearchShop />
      <HomeCS />

      <Top onClick={scrollToTop} />

      <Footer />
    </div>
  );
}

export default App;
