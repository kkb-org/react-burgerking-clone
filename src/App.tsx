import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headers/Header";
import ExtendedHeader from "./components/headers/ExtendedHeader";
import Video from "./components/video/Video";
import Share from "./components/share/Share";
import HomeGuide from "./components/home_guide/HomeGuide";
import SearchShop from "./components/search_shop/SearchShop";

function App() {
  return (
    <div className="App">
      <Header />
      <ExtendedHeader />

      <Video />
      <Share />
      <HomeGuide />
      <SearchShop />
    </div>
  );
}

export default App;
