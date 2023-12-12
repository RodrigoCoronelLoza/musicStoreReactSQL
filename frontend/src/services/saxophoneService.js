import axios from "axios";

export const getAll = async () => {
  const { data } = await axios.get("/api/acc/saxophone/");
  return data;
};

export const search = async (searchTerm) => {
  const { data } = await axios.get("/api/acc/saxophone/search/" + searchTerm);
  return data;
};

export const getAllSaxTags = async () => {
  const { data } = await axios.get("/api/acc/saxophone/tags");
  return data;
};

export const getAllSaxByTag = async (tag) => {
  if (tag === "All") return getAll();
  const { data } = await axios.get("/api/acc/saxophone/tag/" + tag);
  return data;
};

export const getSaxById = async (saxId) => {
  const { data } = await axios.get("/api/acc/saxophone/" + saxId);
  return data[0];
};
