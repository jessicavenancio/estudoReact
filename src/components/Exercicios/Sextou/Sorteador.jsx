// 1) Crie um componente de <Sorteio>, ao clicar no botão deve gerar um
// número aleatório. Use o esquema Math.floor(Math.random() * 100). 
// 	- Caso o número gerado seja par, mostrar em verde.
// 	- Caso o número gerado seja ímpar, mostrar em amarelo.

// TEMPO: 20 min

import "./Sorteador.css";
import { useState } from "react";

export function Sorteador (){
    const [numero , setNumero] = useState(0);

    let backgroundColor = "black"; //objeto de estilo

    if(numero %2 ===0){
        backgroundColor = "green";
    }else {
        backgroundColor = "red";
    }
    const objectStyle = { backgroundColor };

    function numAleatorio(numero){
        setNumero(numero = Math.floor(Math.random()*100));
        // console.log(numero);
    }

    return(
        <div className="sorteio">
            <h1 style={objectStyle}>{numero}</h1>
            <button onClick={numAleatorio}>Sortear</button>
        </div>
        
    );
};