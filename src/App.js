import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NavbarP from "./components/Navbar/Navbar";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarP />
        <React.Fragment>
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
        </React.Fragment>
      </BrowserRouter>


      {/* <BrowserRouter>
      <NavbarP/>
      <LeftSide/>
      <Routes>
      <Route exact path="/" Component={Home}/>
                        <Route path="/home" Component={Home}/>
                        <Route path="/about" Component={About}/>
      </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
