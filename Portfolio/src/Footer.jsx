import { useState } from "react";
import "../styles/Footer.css";
import githubImg from "./assets/github-link.png";
import linkedinImg from "./assets/linkedin-logo.png";
import instagramImg from "./assets/instagram-logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="links-container">
        <a 
          href="https://github.com/dachyon1123" 
          className="img-container"
          target="_blank"
        >
          <img 
            src={githubImg} 
            alt="github logo" 
            className="github-logo" 
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dylan-polito-271090201/"
          className="img-container"
          target="_blank"
        >
          <img
            src={linkedinImg}
            alt="linkedin logo"
            className="linkedin-logo"
          />
        </a>
        <a
          href="https://www.instagram.com/dylan_politolt/"
          className="img-container"
          target="_blank"
        >
          <img
            src={instagramImg}
            alt="instagram logo"
            className="instagram-logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
