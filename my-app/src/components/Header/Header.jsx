import React from "react";

import { useNavigate} from "react-router-dom"

const Header = ({label}) => {

    

    return(
        
        <div>
            <h1>Calculo de Investimento{label}</h1>
        </div>

    );

} 
export default Header;