import { useState } from "react"
import Home from "./Home"

const Registre = () => {
const [valor, setValor] = useState({
nickname:"",
email:"",
password:""
 })
    
 const[estaLogueado, setEstaLogueado]= useState(false)
    
const Change = (e) => {
    
setValor({...valor, [e.target.name]: e.target.value})

}

const handleSubmit = (e) => {
    e.preventDefault()

    if(valor.nickname && valor.email && valor.password){
        return setEstaLogueado(true)
    }
    console.log("Usuario", valor)
    console.log("Esta logueado?", estaLogueado)
}
    
return(
    <div>
        <Home/>
        <form onSubmit={handleSubmit}>
            <label>Nickname:</label>
            <input
            id="nickname"
            name="nickname"
            type="text"
            placeholder="Escribe tu nickname"
            value={valor.nickname}
            onChange={Change}
            />
                
            <label>Email:</label>
            <input
            id="email"
            name="email"
            type="email"
            placeholder="Escribe tu email"
            value={valor.email}
            onChange={Change}
            />
                
            <label>Password:</label>
            <input
            id="password"
            name="password"
            type="password"
            placeholder="Escribe tu contraseña"
            value={valor.password}
            onChange={Change}
            />
            <input
            type="submit"
            />
            </form>
 </div>
)
}

export default Registre;
    
    