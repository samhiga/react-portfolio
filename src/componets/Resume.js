import React from "react";
import resumePDF from "../assets/SamHigaResume.docx.pdf";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

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
  );
}

export default Resume;
