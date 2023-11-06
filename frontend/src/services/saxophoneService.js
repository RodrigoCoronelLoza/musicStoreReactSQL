// import {
//   sample_tags_sax,
//   saxophone_accesories,
// } from "../../../backend/src/data";

import axios from "axios";

// export const getAll = async () => saxophone_accesories;
export const getAll = async () => {
  const { data } = await axios.get("/api/acc/saxophone/");
  return data;
};

// export const search = async (searchTerm) =>
//   saxophone_accesories.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

export const search = async (searchTerm) => {
  const { data } = await axios.get("/api/acc/saxophone/search/" + searchTerm);
  return data;
};
// export const getAllSaxTags = async () => sample_tags_sax;

export const getAllSaxTags = async () => {
  const { data } = await axios.get("/api/acc/saxophone/tags");
  return data;
};

// export const getAllSaxByTag = async (tag) => {
// if (tag === "All") return getAll();
// return saxophone_accesories.filter((item) => item.tags?.includes(tag));
// };

export const getAllSaxByTag = async (tag) => {
  if (tag === "All") return getAll();
  const { data } = await axios.get("/api/acc/saxophone/tag" + tag);
  return data;
};

// export const getSaxById = async (clarId) =>
// saxophone_accesories.find((item) => item.id === clarId);

export const getSaxById = async (saxId) => {
  const { data } = await axios.get("/api/acc/saxophone/" + saxId);
  return data;
};
