import "./Quiz.css";
import { useState } from "react";


// 2) Ao errar deve haver um botão que permite ao usuário voltar para responder novamente a pergunta (Tentar novamente). 
// 	- Devemos reduzir o número de tentativas dele toda vez que tentar novamente. 
// 	- Caso o número de tentativas chegue a zero mostrar na tela "Tentativas esgotadas"


const pergunta = {
    enunciado: "Qual a cor do cavalo branco do Napoleão?",
    alternativas: [
        "Branco",
        "Preto",
        "Caramelo",
        "Amarelo"
    ],
    alternativaCorreta: "Branco"
};

let qtdTentativas = 3;

export function Quiz(){

    const [tela, setTela] = useState("pendente"); //statuQuiz, setStatusQuiz
    //pendente ainda não respondeu
    //acertou = marcou a alternativa correta
    //errou = marcou a alternativa errada

    function check(altMarcada){
        if(altMarcada === pergunta.alternativaCorreta){
            setTela("acertou");
        }else{
            setTela("errou");
            qtdTentativas = qtdTentativas -1;
            //console.log(qtdTentativas);
            if(qtdTentativas === 0){
                setTela("acabou");
            }
        }
    }
    if(tela === "pendente"){
        return(
        <div>
            <h3>{pergunta.enunciado}</h3>
            <ol type="A">
                {pergunta.alternativas.map((alt)=>
                <li className="alternativa" onClick={() => check(alt)}>{alt}</li>
                )}
            </ol>
        </div>
        )
    }else if(tela === "acertou"){
        return(
        <div>
            <h1>Parabéns você acertou!</h1>
        </div>
        )
    }else if(tela === "acabou"){
        return(
            <div>
                <h1>Ficou!</h1>
                <h3>Você perdeu!</h3>
            </div>
        );
    }else
        return(
        <div>
        <h1>Pior que tá não fica...</h1>
        <p>Tentativas: {qtdTentativas}
        </p>
        <button onClick={() => setTela ("pendente")}>Tente novamente</button>
        </div>
        )
};