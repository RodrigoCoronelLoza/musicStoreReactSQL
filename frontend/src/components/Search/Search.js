import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./search.module.css";

export default function Search({ folder }) {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const { searchTerm } = useParams();
  useEffect(() => {
    setTerm(searchTerm ?? "");
  }, [searchTerm]);
  const search = async () => {
    term
      ? navigate(`/${folder}Accessories/search/` + term)
      : navigate(`/${folder}Accessories`);
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search Accessories"
        onChange={(e) => setTerm(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && search()}
        value={term}
      />
      <button onClick={search}>Search</button>
    </div>
  );
}
