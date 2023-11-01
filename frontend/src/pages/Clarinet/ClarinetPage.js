import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import Search from "../../components/Search/Search";
import Tags from "../../components/Tags/Tags";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import { clarinet_accesories } from "../../data";
import {
  getAll,
  getAllClarByTag,
  getAllClarTags,
  search,
} from "../../services/clarinetService";
import classes from "./clarinetPage.module.css";
const initialState = { clarinetAcc: [], clarinetTags: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "CLAR_LOADED":
      return { ...state, clarinetAcc: action.payload };
    case "TAGS_LOADED":
      return { ...state, clarinetTags: action.payload };
    default:
      return state;
  }
};
export default function ClarinetPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { clarinetAcc, clarinetTags } = state;
  const { searchTerm, tag } = useParams();

  useEffect(() => {
    getAllClarTags().then((tags) =>
      dispatch({ type: "TAGS_LOADED", payload: tags })
    );
    const loadClar = tag
      ? getAllClarByTag(tag)
      : searchTerm
      ? search(searchTerm)
      : getAll();
    loadClar.then((clarinet_accesories) =>
      dispatch({ type: "CLAR_LOADED", payload: clarinet_accesories })
    );
  }, [searchTerm, tag]);
  return (
    <>
      <div className={classes.container}>
        <Search folder={"clarinet"} />
        <Tags folder={"clarinet"} tags={clarinetTags} />
        {clarinetAcc.length === 0 && <NotFound />}
        <Thumbnails acc={clarinetAcc} folder={"clarinet"} />
      </div>
    </>
  );
}
