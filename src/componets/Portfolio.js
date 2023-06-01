import React from "react";
import "./Portfolio.css";
import Gymder from "../assets/img/homepage.jpeg";
import Emojify from "../assets/img/Emojify.jpg";  
import TextEditor from "../assets/img/pwa.jpeg"; 
import Ecommerce from "../assets/img/commerce.jpeg";   
import README from "../assets/img/README.jpeg";
import Weather from "../assets/img/weather.jpeg";  



function Portfolio() {
    return (
      <div>
        <section id="work" className="repos">
          <div className="flex-row">
            <h2 className="section-title secondary-border">Work</h2>
          </div>
  
          <div className="repo-grid">
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
                    <div className="overlay">
                      <h4>Gymder</h4>
                      <p>
                        Finding a workout partner can often be difficult and
                        scary for some people. Gymder combats this problem by
                        offering an application that can assist with finding and
                        connecting you with potential gym partners. Simply create
                        a profile and enter your bio and your training goals and
                        match with other users you feel have similar goals.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="job-text">
                <ul>
                    <a className="portfolio-button"
                    href="https://gymder-dv-sh-kp.herokuapp.com/profile/login">Gymder Live Site</a>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="repo">
              <div className="repo-info">
                <div className="repo-img">
                  <a href="https://github.com/samhiga/emojify.git">
                    <img
                      src={Emojify}
                      className="my-2"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                    <div className="overlay">
                      <h4>Emojify</h4>
                      <p>
                        There are thousands of movies available for streaming.
                        Users end up spending hours to pick a movie. This app
                        makes it easier for users to decide on a movie based on
                        user's moods and inclinations that are expressed through
                        emojis. The user is presented with emojis to pick from
                        and the algorithm recommends a list of movies. If the
                        user ever wants to look at their past movie suggestions,
                        they have option to do so as well.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="job-text">
                <ul>
                    <a className="portfolio-button"
                    href="https://samhiga.github.io/emojify/">Emojify Live Site</a>
                  </ul>
                </div>
              </div>
            </div>

            <div className="repo">
              <div className="repo-info">
                <div className="repo-img">
                  <a href="https://github.com/samhiga/pwa-text-editor.git">
                    <img
                      src={TextEditor}
                      className="my-2"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                    <div className="overlay">
                      <h4>Text Editor</h4>
                      <p>
                      This program is a text editor so users can enter thier notes and code snippets that could be used for later. This program can also be accesed and be fully functional without an internet conncetion allowing users to work offline as well.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="job-text">
                </div>
              </div>
            </div>

            <div className="repo">
              <div className="repo-info">
                <div className="repo-img">
                  <a href="https://github.com/samhiga/e-commerce-back-end.git">
                    <img
                      src={Ecommerce}
                      className="my-2"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                    <div className="overlay">
                      <h4>E-Commerce Back-End</h4>
                      <p>
                      This program stores information in a database for a retail store. Users can reference the data via Insomnia, in which they can see information on different items and categories that the store has. They can also add items and edit their information as well.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="job-text">
            
                </div>
              </div>
            </div>

            <div className="repo">
              <div className="repo-info">
                <div className="repo-img">
                  <a href="https://github.com/samhiga/Professional-README-Generator.git">
                    <img
                      src={README}
                      className="my-2"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                    <div className="overlay">
                      <h4>README Generator</h4>
                      <p>
                        This program can generate a README file for a user's project. The user can enter information about their project and the program will generate a README file for them using Node.js.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="job-text">
                  
                  
                </div>
              </div>
            </div>

            <div className="repo">
              <div className="repo-info">
                <div className="repo-img">
                  <a href="https://github.com/samhiga/weather-dashboard.git">
                    <img
                      src={Weather}
                      className="my-2"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                    <div className="overlay">
                      <h4>Weather Dashboard</h4>
                      <p>
                      This site has the ability to tell the users the current weather(temp,humidity, and wind speed) as well as the upcoming 5 day forcast.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="job-text">
                  <ul>
                    <a className="portfolio-button"
                    href="https://samhiga.github.io/weather-dashboard/">Weather Dashboard Live Site</a>
                  </ul>
                </div>
              </div>
            </div>
          
          
          
         
          </div>
        </section>
      </div>
    );
  }
  

export default Portfolio;