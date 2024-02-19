import { useState } from "react";
import '../styles/AboutMe.css'
import img from './assets/profile-pic.jpg'

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="header-picture-container">
        <h1 className="about-me-header">About Me</h1>
        <img src={img} alt="profile picture" className="profile-picture"/>
      </div>
      <div className="paragraph-container">
        <p className="about-me-paragraph">
          Hello! I'm a passionate individual with a zest for life and a diverse set of hobbies. At the heart of my interests is rock climbing, an activity that challenges me physically and mentally, teaching me the value of perseverance and focus. When I'm not scaling cliffs, I'm often immersed in the dynamic worlds of video games, where strategy and creativity fuel my love for interactive storytelling and digital adventures. As a coding enthusiast, I find joy in transforming complex problems into elegant solutions, constantly exploring the limitless potential of technology. Above all, my love for animals keeps me grounded and connected to the simpler joys of life, reminding me of the importance of compassion and empathy. Whether through scaling heights, exploring virtual realms, coding innovations, or caring for animals, each of these passions shapes the unique story that I bring to every project and team.
        </p>
      </div>
    </div>
  )
}

export default AboutMe;