import "./Cadastro.css";
import { useState } from "react";

export function Cadastro(){

    //useState = função que usa o estado, retornado em forma de array(vetor)
    const [nome, setNome] = useState("");

    function obterNome(evento){
        const campo = evento.target; //o target é o próprio campo
        const valor = campo.value;
        setNome(valor); 
        //setNome altera o valor do estado "nome" para o que está recebendo na target 
        //do campo através do value
    }

    const [email, setEmail] = useState("");

    function obterEmail(evento){
        // const campo = evento.target;
        // const valor = campo.value;
        // setEmail(valor);
        setEmail(evento.target.value);//setEmail acompanha o evento na target e armazena esse valor
    }


// Atividade 2:
// No componente Cadastro, crie um novo campo e um no estado para digitação de um resumo, esse 
// resumo deve ser uma descrição do usuário. 
//A medida que o conteúdo for digitado, deve-se mudar o estado do resumo e ser mostrado na tela com as demais informações.
//Para isso utilize a tag <textarea>, juntamente com o evento onChange do React.

    const [resumo, setResumo] = useState("");

    function obterResumo (evento){
        setResumo(evento.target.value);
    }

    return(
        <div className="cadastro">
            <h2>Formulário de cadastro</h2>
            <br />
            <input type="text" placeholder="Digite seu nome" onChange={obterNome}/>
            <br />
            <input type="text" placeholder="Digite seu nome" onChange={obterEmail}/>
            <br />
            <textarea cols="30" rows="10" onChange={obterResumo}></textarea>
            <br />
            <strong>{nome}</strong>
            <br />
            <strong>{email}</strong>
            <br />
            <strong>{resumo}</strong>

        </div>
    )
}