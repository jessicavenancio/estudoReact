import { useState } from "react";
import "./Contador.css";
export function Contador() {
//     //useState é uma função que cria um estado
//     //Um estado é uma variável especial que sincroniza as mudanças da página
//     //indice 0 => estado
//     //indice 1 => função que muda o estado
//     // const array = useState(0); //a função useState retorna um array

//     // let numero = array[0]; // inicializa o numero com o estdo inicial
//     // let setNumero  = array[1]; // atualiza o numero

//     //destruct: "quebra o array" e coloca em nova variáveis
    const [numero, setNumero] = useState(0);

    function inc() {
        setNumero(numero + 1);
    }

    function dec() {
        setNumero(numero - 1);
    }

    return (
        <div>
            <h1>{numero}</h1>
            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
        </div>
    );
};

