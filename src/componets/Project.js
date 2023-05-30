import React from "react";


function Project() {
    return (
      <div>
        <section id="work" className="projects">
          <div className="flex-row">
            <h2 className="section-title secondary-border">Work</h2>
          </div>
  
          <div className="projects">
            <div className="project-info">
              <div className="project-img">
                <a href="a">
                  <img
                    // src={/* Image URL */}
                    className="my-2"
                    style={{ width: "100%" }}
                    alt="project"
                  />
                </a>
              </div>
              <div className="job-text">
                <h4>project name</h4>
                <p>a project</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default Project;