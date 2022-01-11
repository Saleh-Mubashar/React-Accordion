import { React, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSpring, animated } from "react-spring";

function Accordion(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
    console.log(e.target);
  };

  //conditional styling
  const styles = {
    //if open is true, show content
    accordionTitle: {
      color: open ? "#10d6f5" : "#fff",
    },
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "100px" : "25px" },
    config: { duration: "300" },
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff",
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "#10d6f5" : "#fff",
    },
    config: { duration: "120" },
  });

  return (
    <animated.div className="accordion__item" style={(openAnimation)}>
      <div className="accordion__header" onClick={toggleHandler}>
        <h4 style={styles.accordionTitle}>{props.title}</h4>
        <animated.i style={iconAnimation}>
          <ExpandMoreIcon />
        </animated.i>
      </div>
      <p className="accordion__content">{props.text}</p>
    </animated.div>
  );
}

export default Accordion;
