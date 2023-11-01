import { clarinet_accesories, sample_tags_clar } from "../data";

export const getAll = async () => clarinet_accesories;

export const search = async (searchTerm) =>
  clarinet_accesories.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const getAllClarTags = async () => sample_tags_clar;

export const getAllClarByTag = async (tag) => {
  if (tag === "All") return getAll();
  return clarinet_accesories.filter((item) => item.tags?.includes(tag));
};

export const getClarById = async (clarId) =>
  // console.log(clarinet_accesories[clarId]);
  // return clarinet_accesories[clarId];
  // console.log(clarId);
  // console.log(clarinet_accesories[0].id);
  // console.log({ clarId });
  // const y = toString(clarId);
  // console.log({ y });

  clarinet_accesories.find((item) => item.id === clarId);
// console.log({ x })
// return x;
