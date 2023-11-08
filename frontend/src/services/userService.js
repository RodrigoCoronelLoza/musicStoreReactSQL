import axios from "axios";

export const getUser = () =>
  localStorage.getItem("userms")
    ? JSON.parse(localStorage.getItem("userms"))
    : null;

export const login = async (email, password) => {
  const { data } = await axios.post("api/users/login", { email, password });
  localStorage.setItem("userms", JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem("userms");
};
