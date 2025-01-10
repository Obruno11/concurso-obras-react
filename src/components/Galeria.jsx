import { useState } from "react";
import { GridGaleria } from "./GridGaleria/GridGaleria";

export const Galeria = () => {
  const [filtro, setFiltro] = useState("");

  return (
    <div className="m-10">
      <div className="bg-white p-10 rounded-xl shadow mb-5">
          <input
            type="text"
            value={filtro}
            placeholder="Filtra por titulo de la obra..."
            className="rounded border-2 border-zinc-300 p-1 w-full"
            onChange={(e) => setFiltro(e.target.value)}
          />
      </div>
      <GridGaleria filtro={filtro}/>
    </div>
  );
};
