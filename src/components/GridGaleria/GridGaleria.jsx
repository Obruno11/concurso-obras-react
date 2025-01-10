import { useEffect, useState } from "react";
import axios from "../../api/axios";

import { Card } from "../Card/Card";

export const GridGaleria = ( {filtro} ) => {
  const [obras, setObras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("obras")
      .then((response) => {
        if (filtro != "") {
          const result = response.data.filter((obra) => {
            if(obra.titulo.toUpperCase().includes(filtro.toUpperCase())){
              return true;
            }
            return false;
          });
          setObras(result);
        } else {
          setObras(response.data);
        }
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [filtro]);

  if (loading) {
    return <p>Loading Gallery...</p>;
  }

  if (error) {
    return <p>Unable to load</p>;
  }

  return (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {obras.map((obra) => {
          return (
            <Card
              key={obra.id}
              id={obra.id}
              titulo={obra.titulo}
              propietario={obra.propietario}
              img={obra.img}
            />
          );
        })}
      </div>
  );
};
