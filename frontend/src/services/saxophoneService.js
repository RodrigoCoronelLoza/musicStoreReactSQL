import { sample_tags_sax, saxophone_accesories } from "../data";

export const getAll = async () => saxophone_accesories;

export const search = async (searchTerm) =>
  saxophone_accesories.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const getAllSaxTags = async () => sample_tags_sax;

export const getAllSaxByTag = async (tag) => {
  if (tag === "All") return getAll();
  return saxophone_accesories.filter((item) => item.tags?.includes(tag));
};
