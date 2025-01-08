import { useContext, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./components/Home";
import { Galeria } from "./components/Galeria";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user, getUser, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <div id="mainContent" className="bg-zinc-50">
      <nav className="w-min-full bg-zinc-100 grid grid-cols-3 min-h-20 px-4 shadow-xl fixed top-0 end-0 start-0">
        <div className="flex justify-start items-center">
          <p className="py-2 px-4 text-slate-900 text-2xl font-semibold">
            CAMINOS HACIA LA INCLUSIÓN
          </p>
        </div>
        <div className="flex justify-center items-center text-center gap-1 text-xl">
          <Link to="/">
            <p className="bg-zinc-100 rounded-l-xl border-2 border-emerald-500 text-emerald-500 px-4 py-2 hover:bg-emerald-500 hover:text-white min-w-48 shadow-xl text-lg">
              Inicio
            </p>
          </Link>
          <Link to="/galeria">
            <p className="bg-zinc-100 rounded-r-xl border-2 border-emerald-500 text-emerald-500 px-4 py-2 hover:bg-emerald-500 hover:text-white min-w-48 shadow-xl text-lg">
              Galeria
            </p>
          </Link>
        </div>
        <div className="flex justify-end items-center gap-1">
          {user ? (
            <>
              <Link to="/">
                <button className="bg-zinc-100 rounded-l-xl border-2 border-emerald-500 text-emerald-500 px-4 py-2 hover:bg-emerald-500 hover:text-white min-w-48 shadow-xl text-lg">
                  {user.email}
                </button>
              </Link>
              <button
                className="bg-zinc-100 rounded-r-xl border-2 border-red-500 px-4 py-2 hover:bg-red-500 hover:text-white text-center shadow-xl material-icons text-lg text-red-500"
                onClick={() => logout()}
              >
                logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-zinc-100 rounded-xl border-2 border-emerald-500 text-emerald-500 px-4 py-2 hover:bg-emerald-500 hover:text-white min-w-48 shadow text-lg">
                Iniciar Sesion
              </button>
            </Link>
          )}
        </div>
      </nav>

      <main className="mt-20">
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
