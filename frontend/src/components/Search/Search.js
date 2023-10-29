import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./search.module.css";

export default function Search({ folder }) {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  //   switch (folder) {
  // case "clarinets":
  //   const search = async () => {
  // term
  //   ? navigate("/clarinetAccessories/search/" + term)
  //   : navigate("/clarinetAccessories");
  //   };
  //   break;
  // case "saxophones":
  //   console.log("huev");
  //   break;
  // default:
  //   console.log("Gran huev");
  //   }
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
        defaultValue={searchTerm}
      />
      <button onClick={search}>Search</button>
    </div>
  );
}
