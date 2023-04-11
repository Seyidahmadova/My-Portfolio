import React from "react";
import './About.css'

export default function About() {
  return (
    <div className="About">
      <div className="about-container">
        <div className="introduction">
          <h1> About Me</h1>
          <p>My introduction</p>
        </div>

        <div className="about-image"></div>
        <div className="about">
            {/* <div>
            <a href="Aysel_Front_End_Resume.pdf" download="Aysel_Front_End_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
            </div> */}
        </div>
      </div>
    </div>
  );
}
