import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="">
      <section className="bg-slate-500 grid grid-cols-1 min-h-80">
        <div className="">
          <p className="text-white text-5xl font-semibold p-10 text-center">
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
          <Link to="/login">
            <button className="bg-violet-600 rounded text-white px-4 py-2 hover:bg-violet-700">
              Iniciar Sesion
            </button>
          </Link>
          <Link to='/register'>
            <button className="border-2 border-white rounded text-white px-4 py-2 hover:bg-white hover:text-black">
              Registrarse
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
