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

export const register = async (registerData) => {
  const { data } = await axios.post("api/users/register", registerData);
  localStorage.setItem("userms", JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem("userms");
};

export const updateProfile = async (user) => {
  const { data } = await axios.put("/api/users/updateProfile", user);
  localStorage.setItem("userms", JSON.stringify(data));
  return data;
};

export const changePassword = async (passwords) => {
  await axios.put("/api/users/changePassword", passwords);
};
