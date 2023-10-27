import React from "react";
import { Link } from "react-router-dom";
import Price from "../Price/Price";
import classes from "./thumbnails.module.css";

export default function Thumbnails({ acc, folder }) {
  return (
    <>
      <ul className={classes.list}>
        {acc.map((acc) => (
          <li key={acc.id}>
            <Link to={`/${folder}Accessories/${acc.id}`}>
              <img
                className={classes.image}
                src={`/images/${folder}/${acc.url}`}
                alt={acc.title}
              />
              <div className={classes.content}>
                <div className={classes.name}>{acc.title}</div>

                <div className={classes.product_item_footer}>
                  <div className={classes.origins}>
                    <span key={acc.fabrication}> {acc.fabrication} </span>
                  </div>
                </div>
                <div className={classes.price}>
                  <Price price={acc.price} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
