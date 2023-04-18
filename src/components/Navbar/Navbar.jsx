import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Burger from "../Burger/Burger";
import logo from "../../assets/S (3).png";
import "./Navbar.css";

export default function NavbarP() {
  const [icon, setIcon] = useState("icon unclicked");
  // const [theme, setTheme] = useState("light");
  // const [isIconClicked, setIconClicked] = useState(false);

  // const toggleTheme = () => {
  //   if (!isIconClicked) {
  //     setIcon("icon clicked");
  //     setTheme("dark");
  //   } else {
  //     setIcon("icon unclicked");
  //     setTheme("light");
  //   }

  //   setIconClicked(!isIconClicked);
  // };

  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <div className="Navbar">
      {screenSize.dynamicWidth < 479 ? (
        <div className="resizedPart">
          <Navbar.Brand className="brand">Aysel</Navbar.Brand>
          {/* <div className="logo">
            <img src={logo} alt="logo" style={{width:'40px'}}/>
          </div> */}
          <div
            className={icon}
            // onClick={(e) => {
            //   e.preventDefault();
            //   toggleTheme();
            // }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-moon"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
            </svg>
          </div>

          <Burger />
        </div>
      ) : (
        <nav className="nav-container">
          <Navbar.Brand className="brand">Aysel</Navbar.Brand>
          {/* <div className="logo">
            <img src={logo} alt="logo" style={{width:'40px'}}/>
          </div> */}

          <div className="nav-menu">
            {/* <ul className="nav-menu-lists">
              <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul> */}

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </div>

          <div
            className={icon}
            // onClick={(e) => {
            //   e.preventDefault();
            //   toggleTheme();
            // }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-moon"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
            </svg>
          </div>
        </nav>
      )}
    </div>
  );
}
