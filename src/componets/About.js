import React from "react";
import Profile from "../assets/img/Profile.jpeg";
import "./About.css";

function About() {
    return (
      <div className="about-card">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <p className="content is-medium">Full Stack Developer</p>
        <hr />
        <img
          style={{ width: '200px', height: 'auto' }}
          src={Profile}
          alt="profilePicture"
        />
        <p className="content is-italic mt-4">About Me</p>
        <p className="content">
        I am a graduate from UC Santa Barbara with a degree in Communication and a background in marketing. However, my passion lies in Web Development and Computer Science. I have recently completed the Full-Stack Certificate program at UC Berkeley Extension, where I gained comprehensive skills in both front-end and back-end development. I am proficient in JavaScript, React, CSS, HTML, and have experience working with APIs and MongoDB. I am now actively seeking a Full-Stack position where I can combine my technical expertise with my problem-solving abilities, teamwork skills, and curiosity to contribute to the development of innovative and impactful web applications.

        </p>
      </div>
      </div>
    );
  }
  

export default About;