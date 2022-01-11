import React from "react";
import "./App.css";
import Accordion from "./Components/Accordion";
import { useSpring, animated } from "react-spring";

function App() {
  //title animation
  const titleAnimation = useSpring({
    from: {
      transform: "translateY(-30px)",
    },
    to: [
      {transform: "translateY(15px)"},
    ],
    config: {mass:3, tension:500, friction:25},
  });

  return (
    <div className="main">
      <animated.h1 style={titleAnimation}>React Accordion</animated.h1>
      <div className="accordion">
        <Accordion
          title="Item 1 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="Item 2 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="Item 3 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="Item 4 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
      </div>
    </div>
  );
}

export default App;
