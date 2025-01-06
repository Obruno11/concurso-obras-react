import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="bg-white shadow fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>Titulo</div>
          <div className="flex flex-row">
            <p className="px-2 text-lg hover:text-violet-900 cursor-pointer">
              <Link to="/">Inicio</Link>
            </p>
            <p className="px-2 text-lg hover:text-violet-900 cursor-pointer">
              <Link to="/galeria">Galeria</Link>
            </p>
          </div>
          <div>
            <p className="text-white bg-violet-900 hover:bg-violet-950 font-medium rounded-lg text-md px-4 py-2 text-center cursor-pointer">
              <Link to="/login">Iniciar sesión</Link>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};
