import './about.css';
import Navbar from "./Navbar";
import ProfileInfo from "./ProfileInfo";
import React ,{useEffect} from 'react';

const About = () => {
  
  return (
    <div className="App">
      <Navbar />
      <ProfileInfo />
    </div>
  );
}

export default About;
