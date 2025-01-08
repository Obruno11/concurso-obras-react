import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {register, errors} = useContext(AuthContext);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    register({name, email, password});
  }

  return (
    <div className="flex justify-center items-center min-h-full">
      <div className="bg-zinc-100 rounded shadow py-4 px-12 grid grid-cols-1 gap-6">
        <p className="text-4xl font-semibold">Crear cuenta</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-2">
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center gap-2">
                <span className="material-icons opacity-50">
                  account_circle
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 border-2 border-zinc-200 rounded text-sm w-full"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <span className="text-xs text-red-500">{errors.name}</span>
            </div>
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
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-700">
                Crear cuenta
              </button>
            </div>
          </div>
          <span className="text-xs text-red-500">{errors.message}</span>
        </form>
        <Link to="/login">
          <div className="flex justify-center p-2 hover:text-emerald-500 cursor-pointer">
            Ya tienes cuenta? Inicia sesion aquí.
          </div>
        </Link>
      </div>
    </div>
  );
};
