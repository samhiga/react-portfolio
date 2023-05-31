import React from "react";
import Profile from "../assets/img/Profile.jpeg";

function About() {
    return (
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
          Graduate from UC Santa Barbara with a degree in Communication with
          experience in marketing. However, I am strongly interested in Web
          Development and Computer Science and am currently attending UC Berkeley's
          Full-Stack Bootcamp in hopes of becoming a Full-Stack or Back-End
          Developer.
        </p>
      </div>
    );
  }
  

export default About;