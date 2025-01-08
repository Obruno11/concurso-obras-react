import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from '../api/axios';

export const Register = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors , setErrors] = useState([]);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      axios.post('/register', {name,email,password});
      setName('');
      setEmail('');
      setPassword('');
      navigate('/');
    }catch (e){
      if (e.response.status === 422){
        setErrors(e.response.data.errors)
      }
    }
  }

  return (
    <div className="flex justify-center items-center min-h-full">
      <div className="bg-zinc-100 rounded shadow py-4 px-12 grid grid-cols-1 gap-6">
        <p className="text-4xl font-semibold">Crear cuenta</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-2">
            <div className="grid grid-cols-1 gap-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined opacity-50">
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
                <span className="material-symbols-outlined opacity-50">
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
                <span className="material-symbols-outlined opacity-50">
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
              <button className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700">
                Crear cuenta
              </button>
            </div>
          </div>
        </form>
        <Link to="/login">
          <div className="flex justify-center p-2 hover:text-violet-700 cursor-pointer">
            Ya tienes cuenta? Inicia sesion aquí.
          </div>
        </Link>
      </div>
    </div>
  );
};
