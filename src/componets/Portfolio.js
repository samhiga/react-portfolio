import React from "react";
import Gymder from "../assets/img/homepage.jpeg";


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
                <a href="https://github.com/daevidvo/Gymder.git">
                  <img
                     src={Gymder}
                    className="my-2"
                    style={{ width: "100%" }}
                    alt="project"
                  />
                </a>
              </div>
              <div className="job-text">
                <h4>Gymder</h4>
                <p>Finding a workout partner can often be difficult and scary for some people. Gymder combats this problem by offering an application that can assist with finding and connecting you with potential gym partners. Simply create a profile and enter your bio and your training goals and match with other users you feel have similar goals.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default Portfolio;