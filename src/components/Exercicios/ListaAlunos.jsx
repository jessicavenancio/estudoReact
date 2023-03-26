// - Crie um array de alunos (nome, data de nascimento, nota, telefone); ok
// - Crie um componente que renderiza cada aluno em cards (ListaAlunos); ok
//    - Os alunos com média acima ou igual a 7 tem card com borda verde; ok
//    - Os alunos com média abaixo de 7 tem card com borda vermelha; ok
//    - Mostrar a média APENAS se o aluno tiver a nota maior ou igual a 7; ok
//    - Mostrar uma mensagem motivacional se o aluno tiver nota abaixo de 7; ok

import "./ListaAlunos.css";

const dadosAlunos = [
    {nome:"Jéssica", dataNasc:"22/02/1993", nota:10, telefone:"(35)99999-9999"},
    {nome:"Jhon", dataNasc:"06/10/1994", nota:8, telefone:"(35)99999-9999"},
    {nome:"Gaby", dataNasc:"25/12/1997", nota:6, telefone:"(35)99999-9999"},
    {nome:"Jenni", dataNasc:"09/03/1999", nota:4, telefone:"(35)99999-9999"},
];

export function ListaAlunos()
{
    const elementosDadosAlunos = dadosAlunos.map((dadosAluno,index) =>{

    let media; //armazena nota ou mensagem
    let border = "1px solid black"; //objeto de estilo

    if(dadosAluno.nota >= 7){
        border = "2px solid green";
        media = <p> <b>Nota:</b> {dadosAluno.nota}</p>
    }else {
        border = "2px solid red";
        media = <p><b>Pior que tá não fica.</b></p>
    }
    const objectStyle = { border };

        return <div key={index} className="card-listaAlunos" style={objectStyle}>
            <h2> <b>Nome:</b>{dadosAluno.nome}</h2>
            <p> <b>Data nascimento:</b>{dadosAluno.dataNasc}</p>
            <p> <b>Telefone:</b>{dadosAluno.telefone}</p>
            {media}
        </div>
    });

    return(
        <>
        <h1>Lista alunos</h1>
        <ul>{elementosDadosAlunos}</ul>
        </>
    );
};