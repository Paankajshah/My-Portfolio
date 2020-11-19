import React, { useState, useEffect , useRef} from "react";
import classes from "./styles.module.css";
import Intro from "./components/Intro/intro";
import Projects from "./components/Project/project";
import Contact from "./components/Contact/contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { textIntro , hoverIntro1, hoverIntro2} from "./components/animations/animate";

export default function App() {
 
let text = useRef(null);
  useEffect(() => {
   
  });

  function openNav(e) {
e.preventDefault();
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("menu").style.fontSize = "0px";
  }

  function closeNav(e) {
e.preventDefault(); 

    document.getElementById("myNav").style.width = "0%";
    document.getElementById("menu").style.fontSize = "30px";
  }
  return (
    <div className={classes.App}>
      <div id="myNav" className={classes.overlay}>
        <a
          style={{ cursor: "pointer" }}
          className={classes.closebtn}
          onClick={closeNav}
        >
          &times;
        </a>
        <div className={classes.overlayContent}>
          
            <a  href="#" onClick={closeNav}>
              About
            </a>
            <a href="#" onClick={closeNav}>
              Projects
            </a>
            <a href="#" onClick={closeNav}>
              Contact
            </a>
        </div>
      </div>
      <div className={classes.header}>
        <span id="menu" className={classes.menu} onClick={openNav}>
          &#9776;
        </span>
      </div>
        <Intro />
        <Projects />
        <Contact />
    </div>
  );
}
