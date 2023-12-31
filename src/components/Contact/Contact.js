import React from "react";
import "./Contact.css";
import gmail from "./gmail.jpg";
import linkedIn from "./linkedIn.jpg";
import github from '../Skills/git.jpg'
import { Element } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Element name="Contact" className="formLayout" data-aos="flip-left">
        <h2 className="wave-animation">
          Thank you for visiting my Portfolio
          <span role="img" aria-label="smiley" className="word">
            🙂
          </span>
        </h2>
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_eroqjb7w.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          id="contactAnim"
        ></lottie-player>
        <div className="sm">
          <a
            href="mailto:gagangani17@gmail.com"
            className="animate__animated animate__pulse animate__infinite	"
          >
            <img src={gmail} alt="gmail" className="gmail" />
          </a>
          <a
            href="https://www.linkedin.com/in/gagan-h-n/"
            className="animate__animated animate__pulse animate__infinite	"
            target="blank"
          >
            <img src={linkedIn} alt="linkedIn" className="linkedIn" />
          </a>
          <a href="https://github.com/gagangani13" className="animate__animated animate__pulse animate__infinite" target="blank">
            <img src={github} alt="github" className="github"/>
          </a>
          </div>
          <a href="https://drive.google.com/file/d/18t0vFq544qa5PeLtNytr1NcaepdkE7MY/view?usp=sharing" id="Resume" target="blank">View Resume</a>
      </Element>
      <button className="topBtn" type="button" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </>
  );
};

export default Contact;
