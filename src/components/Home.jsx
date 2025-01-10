import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

export const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <section className="bg-center bg-no-repeat bg-[url('https://picsum.photos/2300/400')] bg-slate-700 bg-blend-multiply">
        <div className="grid grid-cols-1 min-h-96">
          <div className="">
            <p className="text-emerald-400 text-5xl font-semibold p-10 text-center">
              Caminos hacia la inclusión
            </p>
            <p className="text-white text-xl px-48 pt-0 text-center">
              Este concurso invita a artistas de todas las edades a presentar
              obras que promuevan la inclusión en sus múltiples formas. Desde la
              integración de personas con discapacidades, la aceptación de la
              diversidad cultural, étnica y lingüística, hasta la representación
              de comunidades marginadas. Las obras deben transmitir un mensaje
              positivo sobre cómo construir una sociedad más inclusiva y
              respetuosa.
            </p>
          </div>
          <div className="flex justify-center p-6 gap-4">
            {!user ? (
              <>
                <Link to="/login">
                  <button className="border-2 border-emerald-500 rounded-xl text-emerald-500 px-4 py-2 hover:bg-emerald-500 hover:text-white">
                    Iniciar Sesion
                  </button>
                </Link>
                <Link to="/register">
                  <button className="border-2 border-white rounded-xl text-white px-4 py-2 hover:bg-white hover:text-black">
                    Registrarse
                  </button>
                </Link>
              </>
            ) : (
              <p className="text-3xl text-white">
                Bienvenido <span className="text-emerald-500">{user.name}</span>.
              </p>
            )}
          </div>
        </div>
      </section>

      <section>
        <p>Obras destacadas</p>
        <div className="grid grid-cols-3">

        </div>
      </section>
    </div>
  );
};
