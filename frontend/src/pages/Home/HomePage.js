import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import classes from "./homePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={classes.container}>
        <Carousel />

        <p className={classes.music}>
          Music is perhaps the art that presents the most philosophical puzzles.
          Unlike painting, its works often have multiple instances, none of
          which can be identified with the work itself. Thus, the question of
          what exactly the work is is initially more puzzling than the same
          question about works of painting, which appear (at least initially) to
          be ordinary physical objects. Unlike much literature, the instances of
          a work are performances, which offer interpretations of the work, yet
          the work can also be interpreted (perhaps in a different sense)
          independently of any performance, and performances themselves can be
          interpreted. This talk of “interpretation” points to the fact that we
          find music an art steeped with meaning, and yet, unlike drama, pure
          instrumental music has no obvious semantic content. This quickly
          raises the question of why we should find music so valuable. Central
          to many philosophers’ thinking on these subjects has been music’s
          apparent ability to express emotions while remaining an abstract art
          in some sense.
        </p>
      </div>
    </>
  );
}
