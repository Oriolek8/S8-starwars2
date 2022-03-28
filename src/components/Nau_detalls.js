import { useState, useEffect } from "react";
import Home from "./Home";
import { useParams } from 'react-router-dom';
import naveImg from "../img/naveImg.jpg"

const Nau_detalls = () => {
    const [nau, setNau] = useState({})
    const { id } = useParams();


useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id}/`) 
    .then(res => res.json()) 
    .then((nau) => setNau(nau)); 
  }, [id]);


  const fotoNaveDetallada= `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    
    return(
        <div>
            <Home/>
            <div>
                <img src={(fotoNaveDetallada || naveImg )} alt="La imagen no existe"/>
                <h2>{nau.name}</h2>
                <p>Model: {nau.model}</p>
                <p>Cost: {nau.cost_in_credits}</p>
                <p>Capacity: {nau.cargo_capacity}</p>
                <p>Length: {nau.length}</p>
                <p>Max Speed: {nau.max_atmosphering_speed}</p>
            </div>
        </div>
    )

}

export default Nau_detalls 