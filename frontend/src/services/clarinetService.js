// import {
//   clarinet_accesories,
//   sample_tags_clar,
// } from "../../../backend/src/data";

import axios from "axios";

export const getAll = async () => {
  const { data } = await axios.get("/api/acc/clarinet");
  return data;
};

// export const getAll = async () => clarinet_accesories;

// export const search = async (searchTerm) =>
//   clarinet_accesories.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

export const search = async (searchTerm) => {
  const { data } = await axios.get("/api/acc/clarinet/search/" + searchTerm);
  return data;
};
// export const getAllClarTags = async () => sample_tags_clar;

export const getAllClarTags = async () => {
  const { data } = await axios.get("/api/acc/clarinet/tags");
  return data;
};

// export const getAllClarByTag = async (tag) => {
// if (tag === "All") return getAll();
// return clarinet_accesories.filter((item) => item.tags?.includes(tag));
// };
export const getAllClarByTag = async (tag) => {
  if (tag === "All") return getAll();
  const { data } = await axios.get("/api/acc/clarinet/tag/" + tag);
  return data;
};

// export const getClarById = async (clarId) =>
// clarinet_accesories.find((item) => item.id === clarId);

export const getClarById = async (clarId) => {
  const { data } = await axios.get("/api/acc/clarinet/" + clarId);
  return data;
};
