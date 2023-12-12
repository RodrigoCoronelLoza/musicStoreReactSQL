import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import Search from "../../components/Search/Search";
import Tags from "../../components/Tags/Tags";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import {
  getAll,
  getAllSaxByTag,
  getAllSaxTags,
  search,
} from "../../services/saxophoneService";
import classes from "./saxophonePage.module.css";
const initialState = { saxAcc: [], saxTags: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "SAX_LOADED":
      return { ...state, saxAcc: action.payload };
    case "TAGS_LOADED":
      return { ...state, saxTags: action.payload };
    default:
      return state;
  }
};
export default function SaxophonePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { saxAcc, saxTags } = state;
  const { searchTerm, tag } = useParams();

  useEffect(() => {
    getAllSaxTags().then((tags) =>
      dispatch({ type: "TAGS_LOADED", payload: tags })
    );
    const loadSax = tag
      ? getAllSaxByTag(tag)
      : searchTerm
      ? search(searchTerm)
      : getAll();
    loadSax.then((saxophone_accesories) =>
      dispatch({ type: "SAX_LOADED", payload: saxophone_accesories })
    );
  }, [searchTerm, tag]);
  return (
    <>
      <div className={classes.container}>
        <Search folder={"saxophone"} />
        <Tags folder={"saxophone"} tags={saxTags} />
        {saxAcc.length === 0 && <NotFound />}
        <Thumbnails acc={saxAcc} folder={"saxophone"} />
      </div>
    </>
  );
}
