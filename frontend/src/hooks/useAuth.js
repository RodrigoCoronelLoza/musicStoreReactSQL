import { useState, createContext, useContext } from "react";
import * as UserService from "../services/userService";
import { toast } from "react-toastify";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(UserService.getUser());

  const login = async (email, password) => {
    try {
      const user = await UserService.login(email, password);
      setUser(user);
      toast.success("Login Succesful");
      console.log(user);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const logout = () => {
    UserService.logout();
    setUser(null);
    toast.success("Logout Succesful");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
