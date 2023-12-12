import React, { useEffect, useReducer, useState } from "react";
import classes from "./carousel.module.css";
export default function Carousel() {
  const imageSlide = [
    {
      url: "pic1.jpg",
      title: "Woodwind accesories",
      body: "Moutpieces, reeds",
    },
    {
      url: "pic2.jpg",
      title: "Instruments",
      body: "Yamaha-Buffet ",
    },
    {
      url: "pic3.jpg",
      title: "Brass accesories",
      body: "Mouthpieces, booster ",
    },
    {
      url: "pic4.jpg",
      title: "Strings",
      body: "Instruments and accesories",
    },
  ];
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <>
      <div className={classes.containerStyle}>
        <div style={bgImageStyle}></div>
        <div className={classes.transparentbackground}></div>
        <div className={classes.description}>
          <div>
            <h1>{imageSlide[currentState].title}</h1>
            <p>{imageSlide[currentState].body}</p>
          </div>
          <div className={classes.carouselBoullt}>
            {imageSlide.map((imageSlide, currentState) => (
              <span
                key={currentState}
                onClick={() => goToNext(currentState)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
