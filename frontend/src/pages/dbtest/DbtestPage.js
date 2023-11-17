import React, { useEffect, useReducer } from "react";
import { getAll } from "../../services/testService";

const initialState = { clarinetAcc: [], clarinetTags: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "CLAR_LOADED":
      return { ...state, clarinetAcc: action.payload };
    default:
      return state;
  }
};

export default function Dbtest() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { clarinetAcc } = state;

  useEffect(() => {
    const loadClar = getAll();
    loadClar.then((clarinet_accesories) =>
      dispatch({ type: "CLAR_LOADED", payload: clarinet_accesories })
    );
  });

  // const clarAcc = getAll();
  // console.log(clarAcc);
  // return <div>{clarinetAcc.length}</div>;
  return (
    <div>
      <pre>{JSON.stringify(clarinetAcc, null, 2)}</pre>
    </div>
  );
}
