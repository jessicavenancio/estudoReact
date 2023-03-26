import "./Desafio.css";
import {frutas} from "../../Data/Frutas";
import { useState } from "react";

// Atividade 3: Crie um novo componente chamados ListFruits. Internamente, ele deve conter um vetor de frutas, cada frutas deve ter nome e uma imagem (utilize links de imagens da internet). O vetor deve conter no mínimo três frutas. O componente vai ser formado por um campo de busca e uma lista de resultados. A medida que for digitado o nome da fruta no campo de busca, deve-se mostrar a imagem da frutas como resultado na lista.
// OBS1: A lista pode sim conter mais de um resultado uma vez que existe nomes de frutas parecidos (Ex. Maça, Maracujá).
// OBS2: Crie uma a pasta data na raiz (src) do projeto. Esta pasta deve conter o array de frutas que será utilizado na atividade.
// OBS3: Para importar o array de frutas no componente utilize a sintaxe:
// import { frutas } from "../../data/frutas.js";
// OBS4: Para criar a lista de resultados utilize um estado de array que é vazio inicialmente.
// Ex: const [resultados, setResultados] = useState([ ]);

export function Desafio(){

    const [resultado, setResultados] = useState([]);

    function filtrarFrutas(evento){
        const valor = evento.target.value;
        
        let busca = []; //vai conter todas as frutas
        
        for (let fruta of frutas){
            //procura o index da substring dentro don nome da fruta (-1 se não existir)
            let nomeFrutaMinusculo = fruta.nome.toLowerCase();
            let valorMinusculo = valor.toLowerCase();
            let indice = nomeFrutaMinusculo.indexOf(valorMinusculo);

            //verifica se a fruta faz parte dos results
            if(indice != -1){
                busca.push(fruta); //insere a fruta pesquisa no array vazio busca
            }
        }

        setResultados(busca);
    }

    return(
        <div className="frutas">
            <input type="text" onChange={filtrarFrutas}/>
            <br />

            <ul>
                {/* a função map "mapeia" o array e retorna os elementos modificados */}
                {resultado.map(fruta => (
                <li>
                    <img src={fruta.imagem} />
                </li>
                ))}
            </ul>
        </div>
    );
};