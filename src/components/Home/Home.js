import React from "react";
import "./Home.css";
import { Element } from "react-scroll";
const Home = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <Element name="Home">
    <section className="home">
      <div className="myName">
        <h1>
          Hi, I'm <span>Gagan</span>
        </h1>
        <div className="devAnimate">
          <h3 className="text"><span className="fullstack">Fullstack</span> Developer</h3><span class="icon">🌟</span>
        </div>
        <p>
          I am excited about working on challenging projects, pushing
          boundaries, and leveraging my skills to create impactful solutions. If
          you have a project or opportunity that aligns with my expertise, I
          would love to hear from you. Let's connect and discuss how we can work
          together to achieve your goals.
        </p>
        <button className="talkBtn" onClick={scrollToBottom}>Let's connect</button>
      </div>
    </section>
    </Element>
  );
};

export default Home;
