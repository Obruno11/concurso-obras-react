import { useEffect, useState, useContext } from 'react';
import axios from '../api/axios';

import { Card } from './Card/Card';
export const Galeria = () => {
  const [obras, setObras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  
  useEffect(()=>{
    setLoading(true)
    axios.get('http://127.0.0.1:8000/api/obras')
    .then((response)=>{
      setObras(response.data);
      setLoading(false);
    })
    .catch((e)=>{
      setError(e);
      setLoading(false);
    })
  }, [])

  if (loading){
    return <p>Loading Gallery...</p>
  }

  if (error){
    return <p>Unable to load</p>
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-10'>
      {
        obras.map((obra)=>{
          return <Card key={obra.id} id={obra.id} titulo={obra.titulo} categoria={obra.categoria} img_url={obra.img_url}/>
        })
      }
    </div>
  );
};
