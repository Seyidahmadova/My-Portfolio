import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NavbarP from "./components/Navbar/Navbar";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import ContactMe from "./ContactMe/ContactMe";
import { ThemeContext } from "./Theme";

function App() {


  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <NavbarP/>
        <React.Fragment>
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<ContactMe/>}/>
          </Routes>
        </React.Fragment>
      </BrowserRouter>

    </div>
  );
}

export default App;
