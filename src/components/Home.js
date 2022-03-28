import { Link } from 'react-router-dom';
import { HeaderEstils,TopEstils, NavEstils, TituloEstils, EnlacesEstils, H2Estils, ButtonRegistreEstils } from '../Styled';
import Registre from "./Registre"

const Home = () => {

    return(
        <HeaderEstils>
            <TopEstils>
                <TituloEstils>
                    <h2>STAR</h2>
                    <H2Estils>WARS</H2Estils>
                </TituloEstils>
                <div>
                  
                    <ButtonRegistreEstils>Login</ButtonRegistreEstils>

                    <Link to="/registre">
                    <Registre/>
                    </Link>  
                   
    

                </div>
                </TopEstils>
                <NavEstils>
                   <EnlacesEstils to="/">Home</EnlacesEstils>
                   <EnlacesEstils to="/llista_naus">Starships</EnlacesEstils>
                </NavEstils>
        </HeaderEstils>




    )
}
export default Home