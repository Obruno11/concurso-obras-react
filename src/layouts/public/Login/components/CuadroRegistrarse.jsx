import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export const CuadroRegistrarse = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    console.log(form)
    axios.post("http://127.0.0.1:8000/api/register", form)
    .then((response)=>{
      setResponseMessage('Usuario registrado correctamente');
      console.log(responseMessage, response);
    })
    .catch((error)=>{
      setResponseMessage('Error al crear usuario. ');
      console.log(responseMessage, error);
    })
  };

  const manejarCambio = (e) =>{
    const { name, value} = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <>
      <div className="bg-white rounded shadow p-8 my-52">
        <h1 className="text-4xl py-2 text-violet-900 mb-6">Crea tu cuenta</h1>
        <form onSubmit={manejarEnvio} className="flex flex-col">
          <p className="mb-1 mt-2">Nombre:</p>
          <input
            type="text"
            value={form.name}
            onChange={manejarCambio}
            name="name"
            className="bg-zinc-50 border-2 border-zinc-100 rounded p-1"
          />
          <p className="mb-1 mt-2">Email:</p>
          <input
            type="text"
            value={form.email}
            onChange={manejarCambio}
            name="email"
            className="bg-zinc-50 border-2 border-zinc-100 rounded p-1"
          />
          <p className="mb-1 mt-4">Contraseña:</p>
          <input
            type="password"
            value={form.password}
            onChange={manejarCambio}
            name="password"
            className="bg-zinc-50 border-2 border-zinc-100 rounded p-1"
          />
          <div className="flex justify-between">
            <button
              className="mt-8 px-2 py-1 bg-white rounded hover:text-violet-900"
            >
              <Link to='/login'>Inicia sesión</Link>
            </button>
            <button
              type="submit"
              className="mt-8 px-3 py-1 bg-violet-900 rounded text-white hover:bg-violet-950"
            >
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
