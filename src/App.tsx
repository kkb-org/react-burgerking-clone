import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headers/Header";
import ExtendedHeader from "./components/headers/ExtendedHeader";
import Video from "./components/video/Video";
import Share from "./components/share/Share";

function App() {
  return (
    <div className="App">
      <Header />
      <ExtendedHeader />

      <Video />
      <Share />
    </div>
  );
}

export default App;
