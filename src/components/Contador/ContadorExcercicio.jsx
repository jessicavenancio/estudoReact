// Atividade 1:Faça uma melhoria do contador desenvolvido em aula. 
//Crie novas opões de incrementação e decrementarão mudando o estado do contador. 
//Crie as seguintes opções: +10, +100, *3, /2, -50, -5. Para isso utilize botões para cada novo recurso.
//Para acionar as funções, utilize o evento onClick do React.

import { useState } from "react";
import "./Contador.css"

export function ContadorExercicio(){
    const [numero, setNumero] = useState(0);;
    
    //incrementa 100
    function incremetar100(){
        setNumero(numero+100);
    }

    function incremetar3(){
        setNumero(numero*3);
    }

    function incremetar2(){
        setNumero(numero/2);
    }

    function decremetar50(){
        setNumero(numero-50);
    }

    function zerar(){
        setNumero(0);
    }

    return (
        <div className="contador">
            <h1>{numero}</h1>
            <button onClick={() => {setNumero(numero + 10);}}>+10</button>
            <button onClick={incremetar100}>+100</button>
            <button onClick={incremetar3}>*3</button>
            <button onClick={incremetar2}>/2</button>
            <button onClick={decremetar50}>-50</button>
            <button onClick={zerar}>Zerar</button>
        </div>
    );
};