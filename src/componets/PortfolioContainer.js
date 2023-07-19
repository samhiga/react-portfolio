import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
// import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Footer from "./Footer";
// import Nav from "./Navigation";


function PortfolioContainer() {
  const [currentTab, handleTabChange] = useState("about");

  
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    // if (currentTab === "Contact") {
    //   return <Contact />;
    // }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <About />;
  };


  return (
    <>
      <Header currentTab={currentTab} handleTabChange={handleTabChange} />
      {/* <Nav currentTab={currentTab} handleTabChange={handleTabChange} /> */}
      <main>{renderTab()}</main>
      <Footer />
    </>
  );

}

export default PortfolioContainer;