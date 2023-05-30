import React from "react";
import Nav from "./Navigation";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Sam Higa's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          

          <h2>Welcome</h2>
          <p>
            I am a Full Stack Developer.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;