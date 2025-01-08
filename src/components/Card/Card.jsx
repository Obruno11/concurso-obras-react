import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
export const Card = ({ id, titulo, categoria, img_url }) => {
  const { user } = useContext(AuthContext);
  const url = "/galeria/" + id;
  return (
    <>
      <div className=" hover:opacity-100 min-w-48 bg-zinc-100 rounded-xl shadow-xl overflow-hidden relative">
        <div className="flex">
          <img
            src={img_url}
            alt="Foto de la obra"
            className="object-cover w-full"
          />
        </div>
        <div className="grid grid-cols-1 absolute top-0 end-0 left-0 right-0 bg-black min-h-full bg-opacity-50 opacity-0 hover:opacity-100 duration-300">
          <div className="flex w-full justify-between items-end p-8">
            <p className="text-white text-5xl text-center capitalize">
              {titulo}
            </p>
            <Link to={url}>
              <button className="border-2 border-white text-white p-2 hover:bg-white hover:text-black rounded-xl px-4">
                Ver Obra
              </button>
            </Link>
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
    </>
  );
};
