import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Home from "./Home";



const Llista_naus = () => {
    const [llista_naus, setLlista_Naus] = useState([])
    const [pagina, setPagina]= useState(1)
    
    
    let llistat;
    
    useEffect(() => {
        axios
          .get(`https://swapi.dev/api/starships/?page=${pagina}`)
          .then((res) => {
            console.log("res.data.results",res.data.results);
            setLlista_Naus([...llista_naus, ...res.data.results]);

          })
      }, [llista_naus, pagina]);

       llistat = llista_naus.map((el, id) => 
       
      <div key={id} el={el}>
          <Link  
            to={`/nau_detalls/${el.url.split('/').slice(-2, -1).toString()}/`} 
            key={id} 
            >

            <h2>{el.name}</h2>
            <p>{el.model}</p>
          </Link>
      </div>
       )

      return(
          <div>
              <Home/>
              {llistat}     
           <div>
             <button
               onClick={()=> setPagina(pagina + 1)}
             >VIEW MORE</button>
           </div>
          </div>
      )
}

export default Llista_naus