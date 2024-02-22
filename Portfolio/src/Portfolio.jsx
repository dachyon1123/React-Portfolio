import { useState } from "react";
import "../styles/Portfolio.css";
import saboImg from "./assets/sabo-img.jpg";
import comingSoonImg from "./assets/coming-soon.png";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-header">Portfolio</h1>

      <div className="portfolio-links-container-1">
        <a
          href="https://dachyon1123.github.io/Canine-Crusaders/"
          className="port-link"
        >
          <div className="port-img pet-adopt-img">Pet Adoption</div>
        </a>
        <a href="https://github.com/dachyon1123" className="port-link">
          <img
            src={comingSoonImg}
            alt="coming soon placeholder image"
            className="coming-soon-image port-img"
          />
        </a>
        <a href="https://github.com/dachyon1123" className="port-link">
          <img
            src={comingSoonImg}
            alt="coming soon placeholder image"
            className="coming-soon-image port-img"
          />
        </a>
        <a href="https://github.com/dachyon1123" className="port-link">
          <img
            src={comingSoonImg}
            alt="coming soon placeholder image"
            className="coming-soon-image port-img"
          />
        </a>
      </div>
      <div className="portfolio-links-container-2">
        <a href="https://github.com/dachyon1123" className="port-link">
          <img
            src={comingSoonImg}
            alt="coming soon placeholder image"
            className="coming-soon-image port-img"
          />
        </a>
        <a href="https://github.com/dachyon1123" className="port-link">
          <img
            src={comingSoonImg}
            alt="coming soon placeholder image"
            className="coming-soon-image port-img"
          />
        </a>
        <a href="https://github.com/dachyon1123" className="port-link">
          <img
            src={comingSoonImg}
            alt="coming soon placeholder image"
            className="coming-soon-image port-img"
          />
        </a>
        <a href="https://github.com/dachyon1123" className="port-link">
          <img
            src={comingSoonImg}
            alt="coming soon placeholder image"
            className="coming-soon-image port-img"
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
