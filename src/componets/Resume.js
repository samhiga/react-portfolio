import React from "react";
import resumePDF from "../assets/SamHigaResume.docx.pdf";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <div className="resume-content">
          <p className="content is-medium">Resume</p>
          <hr />
          <p className="content">Please feel free to take a look at my Resume.</p>
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
