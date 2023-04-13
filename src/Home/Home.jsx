import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import "./Home.css";
import LeftSide from "../components/LeftSide/LeftSide";

export default function Home() {
  return (
    <div className="Home">
       <LeftSide/>
     <div className="home-container">
     <div className="me">
        <h1>Aysel Seyidahmadova</h1>

        
          <TypeWriterEffect
        textStyle={{
          fontFamily: 'Courier New, Courier, monospace',
          color: '#ccd6f6',
          fontWeight: 500,
          fontSize: '14px',
        }}
        startDelay={2000}
        multiText={[
          'Enthusiastic Dev',
          'Front End Dev',
          'SQL Dev',

        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
       

      </div>
      <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
     </div>
    </div>
  );
}
