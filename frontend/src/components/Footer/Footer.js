import React from "react";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p>Author: Rodrigo Coronel Loza</p>
        {/* <p>
          <a href="mailto:drigo31416@gmail.com">drigo31416@gmail.com</a>
        </p> */}
      </div>
    </footer>
  );
}
