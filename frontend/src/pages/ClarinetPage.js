import React, { useEffect, useReducer } from "react";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import { clarinet_accesories } from "../data";
import { getAll } from "../services/clarinetService";
const initialState = { clarinetAcc: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "CLAR_LOADED":
      return { ...state, clarinetAcc: action.payload };
    default:
      return state;
  }
};
export default function ClarinetPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { clarinetAcc } = state;

  useEffect(() => {
    getAll().then((clarinet_accesories) =>
      dispatch({ type: "CLAR_LOADED", payload: clarinet_accesories })
    );
  }, []);
  return (
    <>
      <Thumbnails acc={clarinetAcc} />
    </>
  );
}
