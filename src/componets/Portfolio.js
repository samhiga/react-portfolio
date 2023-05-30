import React from "react";


function Portfolio() {
    return (
      <div>
        <section id="work" className="repos">
          <div className="flex-row">
            <h2 className="section-title secondary-border">Work</h2>
          </div>
  
          <div className="repo">
            <div className="repo-info">
              <div className="repo-img">
                <a href="">
                  <img
                    // src={/* Image URL */}
                    className="my-2"
                    style={{ width: "100%" }}
                    alt="project"
                  />
                </a>
              </div>
              <div className="job-text">
                <h4>repo name</h4>
                <p>a project</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default Portfolio;