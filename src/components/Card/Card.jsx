import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
export const Card = ({ id, titulo, propietario, img }) => {
  const { user } = useContext(AuthContext);
  const url = "/galeria/" + id;

  return (
    <>
      <Link to={url}>
        <div className=" hover:opacity-100 min-w-48 bg-zinc-100 rounded-xl shadow-xl overflow-hidden relative">
          <div className="flex">
            <img
              src={img}
              alt="Foto de la obra"
              className="object-cover w-full"
            />
          </div>
          <div className="grid grid-cols-1 absolute top-0 end-0 left-0 right-0 bg-black min-h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300">
            <div className="flex flex-col w-full p-8 relative gap-8">
              <div className="absolute bottom-10">
                <p className="text-white text-xl xl:text-5xl text-start capitalize">
                  {titulo}
                </p>
                <p className="text-white text-md xl:text-xl text-start capitalize opacity-80">
                  {propietario}
                </p>
              </div>

              {user ? (
                <button className="material-icons  text-3xl text-white hover:text-emerald-500 absolute top-8 right-8">
                  thumb_up
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
