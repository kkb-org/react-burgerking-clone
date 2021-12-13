import React from "react";
import "./Header.css";
import hamburgIcon from "../../public/hamburg_ic.png";
import logo from "../../public/burgerking_logo.png";
import deliveryBtnBg from "../../public/delivery_button_bg.png";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="Header-container">
          <div className="Hamburg-container">
            <button
              className="Hamburg-menu"
              style={{
                backgroundImage: `url(${hamburgIcon})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "22px auto",
                backgroundColor: "transparent",
                border: "none",
              }}
            ></button>
          </div>

          <div>
            <img className="Logo" src={logo} alt="logo" />
          </div>

          <div className="Delivery-button-container">
            <button
              className="Delivery-button"
              style={{
                backgroundImage: `url(${deliveryBtnBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              딜리버리주문
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
