import axios from "axios";

export const getAll = async () => {
  const { data } = await axios.get("/api/acc/clarinet");
  return data;
};

export const search = async (searchTerm) => {
  const { data } = await axios.get("/api/acc/clarinet/search/" + searchTerm);
  return data;
};

export const getAllClarTags = async () => {
  const { data } = await axios.get("/api/acc/clarinet/tags");
  return data;
};

export const getAllClarByTag = async (tag) => {
  if (tag === "All") return getAll();
  const { data } = await axios.get("/api/acc/clarinet/tag/" + tag);
  return data;
};

export const getClarById = async (clarId) => {
  const { data } = await axios.get("/api/acc/clarinet/" + clarId);
  return data[0];
};
