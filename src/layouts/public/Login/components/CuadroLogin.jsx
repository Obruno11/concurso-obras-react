import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthContext";

export const CuadroLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const [user] = useContext(AuthContext);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setError('');

    axios
    .post('http://127.0.0.1:8000/api/login', {email, password})
    .then((response) =>{
      const {token} = response.data;
      localStorage.setItem('token', token); //Guardar token
      console.log('Logging exitoso');
    })
    .then(()=>{
      navigate('/');
    })
    .catch(()=>{
      setError('Credenciales Incorrectas');
      console.log(error);
    })
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
            value={password}
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
