import { useEffect } from "react";
import axios from "axios";

export const Show = () => {
  const [obra, setObra] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
    .get("http://127.0.0.1:8000/api/obras/")
    .then((response) => {
      setObra(response.data);
      setLoading(false);
    })
    .catch((e)=>{
      setError(e);
      setLoading(false);
    })
  }, []);
  return <></>;
};
