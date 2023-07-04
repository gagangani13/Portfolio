import React from "react";
import { Element } from "react-scroll";
import "./Projects.css";
import Chat from "./chatApp.jpg";
import Expense from "./expense.jpg";
import Mailbox from "./mailbox.jpg";
import Ecommerce from "./ecommerce.jpg";
import Restaurant from "./restaurant.jpg";
import Slider from "react-slick";
import { useEffect } from "react";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => (
  <button {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
      />
    </svg>
  </button>
);

const NextArrow = (props) => (
  <button {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L12.17 12z"
      />
    </svg>
  </button>
);

const Projects = () => {

  const sliderRef = useRef(null);
  

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (slider) {
        slider.slickNext(); 
      }
    }, 5000); 

    return () => {
      clearInterval(interval); 
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true, 
    autoplaySpeed: 5000, 
    dotsClass: "slick-dots"
  };
  return (
    <Element name="Projects" className="projects">
      <h2>Projects</h2>
      <Slider {...settings}>
        <div className="project">
          <h5>Chat App</h5>
          <a href="http://3.232.208.74:3000/" target="blank">
            <img src={Chat} alt="chatApp" />
          </a>
        </div>
        <div className="project">
          <h5>Expense Tracker</h5>
          <a href="http://100.26.115.160:3000/" target="blank">
            <img src={Expense} alt="expenseTracker" />
          </a>
        </div>
        <div className="project">
          <h5>Mailbox</h5>
          <a href="https://gagan-mailbox.netlify.app/" target="blank">
            <img src={Mailbox} alt="mailbox" />
          </a>
        </div>
        <div className="project">
          <h5>E commerce</h5>
          <a
            href="https://gagan-e-commerce-website.netlify.app/"
            target="blank"
          >
            <img src={Ecommerce} alt="Ecommerce" />
          </a>
        </div>
        <div className="project">
          <h5>Restaurant</h5>
          <a
            href="https://gagan-restaurant-website.netlify.app/"
            target="blank"
          >
            <img src={Restaurant} alt="Restaurant" />
          </a>
        </div>
      </Slider>
    </Element>
  );
};

export default Projects;
