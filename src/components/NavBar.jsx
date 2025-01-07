import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const NavBar = () => {
  const token = localStorage.getItem("token");


  const handleClick = () => {
    axios.get("http://127.0.0.1:8000/api/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then(localStorage.removeItem('token'))
    
  };
  return (
    <>
      <nav className="bg-white shadow fixed w-screen z-20 top-0 start-0">
        <div className="max-w-screen-2xl grid grid-cols-3 items-center justify-between mx-auto p-4">
          <div>
            <p className="px-2 text-xl text-violet-900 font-semibold">
              Caminos Hacia La Inclusión
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <p className="px-2 text-lg hover:text-violet-900 cursor-pointer">
              <Link to="/">Inicio</Link>
            </p>
            <p className="px-2 text-lg hover:text-violet-900 cursor-pointer">
              <Link to="/galeria">Galeria</Link>
            </p>
          </div>
          <div className="flex justify-end">
            {token ? (
              <p className="text-white bg-violet-900 hover:bg-violet-950 font-medium rounded-lg text-md px-4 py-2 text-center cursor-pointer">
                <button to="/logout" onClick={handleClick}>
                  Cerrar Sesion
                </button>
              </p>
            ) : (
              <Link to="/login">
                <p className="text-white bg-violet-900 hover:bg-violet-950 font-medium rounded-lg text-md px-4 py-2 text-center cursor-pointer">
                  Iniciar sesión
                </p>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
