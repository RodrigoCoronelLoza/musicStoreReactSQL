import React from "react";
import { Link } from "react-router-dom";
import classes from "./tags.module.css";

export default function Tags({ tags, folder, boolean }) {
  return (
    <div
      className={classes.container}
      style={{ justifyContent: boolean ? "start" : "center" }}
    >
      {tags.map((tag) => (
        <Link key={tag.name} to={`/${folder}Accessories/tag/${tag.name}`}>
          {tag.name}
          {!boolean && `(${tag.count})`}
        </Link>
      ))}
    </div>
  );
}
