import { useEffect, useState } from "react";
import axios from "axios";


import { Card } from "./components/Card";

export const Galeria = () => {
  const [obras, setObras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/obras")
      .then((response) => {
        setObras(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando Obras....</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mx-4 mt-28">
        {obras.map((item) => {
          return (
            <Card key={item.id} obra={item}/>
          );
        })}
      </div>
    </>
  );
};
