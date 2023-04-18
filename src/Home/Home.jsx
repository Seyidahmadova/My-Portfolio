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

<div className="say-hello">
        Say Hello 
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>
      </div>
       

      </div>
      <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
     </div>
    </div>
  );
}
