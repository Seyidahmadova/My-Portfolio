import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import LeftSide from "./components/LeftSide/LeftSide";
import NavbarP from "./components/Navbar/Navbar";
import About from "./About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarP />
        <React.Fragment>
          <LeftSide />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
