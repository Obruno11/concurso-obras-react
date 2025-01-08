import { createContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    const url = "/perfil/" + localStorage.getItem("id");
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  const login = async ({ email, password }) => {
    try {
      await axios.post("/login", { email, password }).then((response) => {
        const token = response.data.token;
        const id = response.data.user.id;
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
      });
      await getUser();
      navigate("/");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const register = async ({ name, email, password }) => {
    try {
      axios.post("/register", { name, email, password });
      navigate("/login");

      // this.login({email, password});
      // getUser();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const logout = () => {
    const token = localStorage.getItem("token");
    try {
      axios.get("/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      setUser("");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, errors, getUser, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
