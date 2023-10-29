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
