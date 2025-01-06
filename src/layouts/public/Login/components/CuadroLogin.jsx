import { useState } from "react";
import { Link } from "react-router-dom";

export const CuadroLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
  };

  const manejarCambioEmail = (e) => {
    setEmail(e.target.value);
  };
  const manejarCambioPass = (e) => {
    setPass(e.target.value);
  };

  return (
    <>
      <div className="bg-white rounded shadow p-8 my-52">
        <h1 className="text-4xl py-2 text-violet-900 mb-6">Inicio de sesión</h1>
        <form onSubmit={manejarEnvio} className="flex flex-col">
          <p className="mb-1 mt-2">Email:</p>
          <input
            type="text"
            value={email}
            onChange={manejarCambioEmail}
            name="email"
            className="bg-zinc-50 border-2 border-zinc-100 rounded p-1"
          />
          <p className="mb-1 mt-4">Contraseña:</p>
          <input
            type="password"
            value={pass}
            onChange={manejarCambioPass}
            name="pass"
            className="bg-zinc-50 border-2 border-zinc-100 rounded p-1"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="mt-8 px-2 py-1 bg-white rounded hover:text-violet-900"
            >
              <Link to="/registrarse">Registrate</Link>
            </button>
            <button
              type="submit"
              className="mt-8 px-3 py-1 bg-violet-900 rounded text-white hover:bg-violet-950"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
