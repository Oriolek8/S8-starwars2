import styled from 'styled-components';
import { Link } from 'react-router-dom';
/*HOME*/ 

export const HeaderEstils = styled.div`
   
    height: auto;
    background-color: black;
    color: white;
    text-align:center;
`;

export const TopEstils = styled.nav`
   
    display:flex;
    justify-content:center;
    font-size:40px;
    
`;

export const TituloEstils = styled.div`
   width:70%;
   
    
`;
export const NavEstils = styled.div`
   width:95%;
   height:auto;
   
   font-size:25px
   display:flex;
   justify-content: space-evenly;
   align-items: center;
   font-size:25px;
   padding-bottom: 15px;
   
   & a:hover {
    color: grey;
    cursor: pointer;
}

  
`;

export const EnlacesEstils = styled(Link)`
   color:white;
   margin-left:7px;
   font-size: 25px;
   text-decoration:none;

  
  
`;
export const H2Estils = styled.h2`
   
   margin-top:-55px;
  
`;
export const ButtonRegistreEstils = styled.button`
   width:auto;
   font-size:25px;
   
  
`;