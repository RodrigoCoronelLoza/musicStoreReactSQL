import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import Price from "../../components/Price/Price";
import Tags from "../../components/Tags/Tags";
import { useCart } from "../../hooks/useCart";
import { getClarById } from "../../services/clarinetService";
import { getSaxById } from "../../services/saxophoneService";
import classes from "./accessoryPage.module.css";

export default function AccessoryPage({ folder }) {
  const [acc, setAcc] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(acc);
    navigate("/cart");
  };

  useEffect(() => {
    if (folder === "clarinet") getClarById(id).then(setAcc);
    if (folder === "saxophone") getSaxById(id).then(setAcc);
  }, [id]);
  return (
    <>
      {!acc ? (
        <NotFound message="Accesory not found" linkText="back to home page" />
      ) : (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`/images/${folder}/${acc.url}`}
            alt={acc.name}
          />
          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{acc.name}</span>
            </div>

            <div className={classes.origins}>
              <span key={acc.fabrication}> {acc.fabrication} </span>
            </div>
            <div className={classes.tag}>
              {acc.tags && (
                <Tags
                  tags={JSON.parse(acc.tags).map((tag) => ({ name: tag }))}
                  folder={folder}
                  boolean={true}
                />
              )}
            </div>

            <div className={classes.price}>
              <Price price={acc.price} />
            </div>

            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </>
  );
}
