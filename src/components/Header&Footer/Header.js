import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import animation from "./Gagan.gif";
import { useState } from "react";
import { motion } from "framer-motion";
const navLinkVariant = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.1,
    fontWeight: "bold",
    transition: { duration: 0.25, type: "tween" },
  },
};

const Header = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header className="header">
      <img
        src={animation}
        alt="Animated GIF"
        className="logo"
        onClick={scrollToTop}
      />
      <motion.div className={active}>
        <motion.span
          variants={navLinkVariant}
          initial="initial"
          whileHover="whileHover"
        >
          <Link
            className="NavLink"
            activeClass="activeLink"
            to="Home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={navToggle}
          >
            Home
          </Link>
        </motion.span>
        <motion.span
          variants={navLinkVariant}
          initial="initial"
          whileHover="whileHover"
        >
          <Link
            className="NavLink"
            activeClass="activeLink"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={navToggle}
          >
            Projects
          </Link>
        </motion.span>
        <motion.span
          variants={navLinkVariant}
          initial="initial"
          whileHover="whileHover"
        >
          <Link
            className="NavLink"
            activeClass="activeLink"
            to="Skills"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={navToggle}
          >
            Skills
          </Link>
        </motion.span>
        <motion.span
          variants={navLinkVariant}
          initial="initial"
          whileHover="whileHover"
        >
          <Link
            className="NavLink"
            activeClass="activeLink"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            onClick={navToggle}
          >
            Contact Me
          </Link>
        </motion.span>
      </motion.div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Header;
