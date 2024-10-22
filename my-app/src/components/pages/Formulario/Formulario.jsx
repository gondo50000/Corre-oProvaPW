import React, { useState } from "react";
import Header from "../../Header/Header";
import "./Formulario.css"


const Formulario = () => {
    const [valorInicial, setValorInicial] = useState(0);
    const [prazo, setPrazo] = useState(0);
    const [juro, setJuro] = useState(0);
    const [resultado, setresultado] = useState([]);

    const calculoInvestimento = () => {
        let res = valorInicial * (1 + juro/100);
        setresultado(res);
        
    }

    return(
        <div>
            <Header/>
            <div className="formulario">
                <label> Valor Inicial</label>
                <input value={valorInicial} onChange={(e) =>setValorInicial(e.target.value)}/>
                <label>Prazo em Meses</label>
                <input value={prazo} onChange={(e) => setPrazo(e.target.value)} />
                <label>Juro Mensal</label>
                <input value={juro} onChange={(e) => setJuro(e.target.value)} />
                <span>O valor final será de {resultado}</span>
            </div>
            <button className="Botao-calcular" onClick={calculoInvestimento}>Calcular</button>

           
        </div>
    )
}


export default Formulario;