import React from "react";
import resumePDF from "../assets/SamHigaResume.docx.pdf";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <div className="resume-content">
          <p className="content is-medium">Skills</p>
          <hr />
          <p className="content">HTML, React.js, MongoDB,  Mongoose ODM,  Apollo GraphQL,  MERN Stack, MySQL, JSON Web Token, Sequelize.js, Front-End Development,  HTML5, Unit Testing · Object-Oriented Programming (OOP) · Express.js,  Node.js, JSON · Fetch,  AJAX,  Server Side API, Web Services API, Bootstrap,  CLI, JavaScript, CSS, Git</p>
        </div>
        <div className="resume-download">
          <a
            className="button is-primary"
            href={resumePDF}
            download="SamHigaResume.pdf"
          >
            <span className="icon">
              <i className="fas fa-download"></i>
            </span>
            <span>Download My Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
