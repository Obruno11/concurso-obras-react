import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import axios from "./api/axios";

import { Home } from "./components/Home";
import { Galeria } from "./components/Galeria";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const user_name = localStorage.getItem("user_name");

  const handleLogout = async () => {
    try {
      await axios
        .get("/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          localStorage.removeItem("token");
          localStorage.removeItem("user_id");
          localStorage.removeItem("user_name");
          setToken('');
          console.log(response);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="mainContent" className="bg-zinc-50">
      <nav className="w-min-96 bg-zinc-100 grid grid-cols-3 min-h-20 px-4">
        <div className="flex justify-start items-center">Title</div>
        <div className="flex justify-center items-center gap-2">
          <Link to="/">
            <p className="hover:text-violet-700">Inicio</p>
          </Link>
          <Link to="/galeria">
            <p className="hover:text-violet-700">Galeria</p>
          </Link>
        </div>
        <div className="flex justify-end items-center">
          {token ? (
            <>
              <Link to="/">
                <button className="bg-violet-600 rounded-l border-r-2 border-violet-800 text-white px-4 py-2 hover:bg-violet-700">
                  {user_name}
                </button>
              </Link>
              <button
                className="bg-violet-600 rounded-r text-white px-4 py-2 hover:bg-violet-700 text-center"
                onClick={handleLogout}
              >
                X
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-violet-600 rounded text-white px-4 py-2 hover:bg-violet-700">
                Iniciar Sesion
              </button>
            </Link>
          )}
        </div>
      </nav>

      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
