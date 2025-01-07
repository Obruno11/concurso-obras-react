import { useEffect, useNavigate } from "react";
import { createContext, useState } from "react";

import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const iniciarSesion = async () => {
      axios
        .post("http://127.0.0.1:8000/api/login", { email, password })
        .then((response) => {
          const { token, user } = response.data;
          localStorage.setItem("token", token); //Guardar token
          setUsuario(user);
          console.log("Logging exitoso");
        })
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          setError("Credenciales Incorrectas");
          console.log(error);
        });
    };
  });
  return (
    <AuthContext.Provider value={{ usuario }}>
      {children}
    </AuthContext.Provider>
  )
};
