import { useState } from "react";
import "../styles/Header.css";

function Header(props) {
  function handleClick(newBodyValue) {
    props.setBody(newBodyValue)
  }

  return (
    <div className="header-container">
      <h1 className="my-name">Dylan Polito</h1>

      <div className="navigation-container">
        <button className="nav-btn" onClick={() => handleClick(0)}>About Me</button>
        <button className="nav-btn" onClick={() => handleClick(1)}>Portfolio</button>
        <button className="nav-btn" onClick={() => handleClick(2)}>Contact Me</button>
        <button className="nav-btn" onClick={() => handleClick(3)}>Resume</button>
      </div>
    </div>
  );
}

export default Header;
