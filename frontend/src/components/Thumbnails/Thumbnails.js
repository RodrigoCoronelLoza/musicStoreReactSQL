import React from "react";
import { Link } from "react-router-dom";
import classes from "./thumbnails.module.css";

export default function Thumbnails({ acc }) {
  return (
    <>
      <ul className={classes.list}>
        {acc.map((map) => (
          <li>
            <Link to={`/clarinetAccessories/${acc.id}`}>
              <img className={classes.image} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
