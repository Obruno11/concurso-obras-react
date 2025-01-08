import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {login ,errors} = useContext(AuthContext);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    login({email, password});
  }
  return (
    <section className="flex justify-center items-center min-h-full">
      <div className="bg-zinc-100 rounded shadow py-4 px-12 grid grid-cols-1 gap-6">
        <p className="text-4xl font-semibold">Login</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-2">
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center gap-2">
                <span className="material-icons opacity-50">
                  mail
                </span>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="p-2 border-2 border-zinc-200 rounded text-sm w-full"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <span className="text-xs text-red-500">{errors.email}</span>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center gap-2">
                <span className="material-icons opacity-50">
                  lock
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-2 border-2 border-slate-200 rounded text-sm w-full"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <span className="text-xs text-red-500">{errors.password}</span>
            </div>
            <div className="flex justify-center">
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-700 cursor-pointer">
                Iniciar Sesion
              </button>
            </div>
          </div>
        </form>
        <Link to="/register">
          <div className="flex justify-center p-2 hover:text-emerald-500 cursor-pointer">
            No tienes cuenta? Regístrate aquí.
          </div>
        </Link>
      </div>
    </section>
  );
};
