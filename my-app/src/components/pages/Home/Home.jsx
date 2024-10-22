import React from "react";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom"

/*dontPad.com/pw2110*/

const Home = () => {


    const navigate = useNavigate();


    const chamarForm = () => {
        navigate("/formulario");
    }

    return (

        <div>
            <Header />
            <div>
                <h3>Olá, você acessou a pagina</h3>
                <button type="submit" onClick={chamarForm}>Realizar o Calculo de investimento</button>
            </div>
        </div>


    );

}


export default Home;