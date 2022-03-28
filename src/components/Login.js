

const Login = ({estaLogueado}) => {
    
    
    return (
        <div>
            {estaLogueado ? <h2>{valor.email}</h2> : <button>Register</button>}
        </div>
    )
}

export default Login;