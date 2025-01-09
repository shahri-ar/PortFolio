import React, { useState, useEffect } from "react";
import Logo from "../img/logo.svg";
import Button from "../common/button.component";

function Navbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState({ top: "0" });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scroll Down
        setNavbarStyle({ top: "-80px" }); // Hide the navbar
      } else {
        // Scroll Up
        setNavbarStyle({ top: "0" }); // Show the navbar
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav id="main-nav" className="flex center justify abc" style={{ ...navbarStyle }}>
        <div className="left flex center">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#service">Service</a>
            <a href="#work">Works</a>
          </div>
        </div>

        <div className="right">
          <a href="#contact">
            <Button className={"btn btn-primary"} text={"contact"} />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
