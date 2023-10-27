import React, { useEffect, useReducer } from "react";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import { saxophone_accesories } from "../data";
import { getAll } from "../services/saxophoneService";
import classes from "./saxophonePage.module.css";
const initialState = { saxAcc: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "SAX_LOADED":
      return { ...state, saxAcc: action.payload };
    default:
      return state;
  }
};
export default function SaxophonePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { saxAcc } = state;

  useEffect(() => {
    getAll().then((saxophone_accesories) =>
      dispatch({ type: "SAX_LOADED", payload: saxophone_accesories })
    );
  }, []);
  return (
    <>
      <div className={classes.container}>
        <Thumbnails acc={saxAcc} folder={"saxophones"} />
      </div>
    </>
  );
}
