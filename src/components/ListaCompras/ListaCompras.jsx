import "./ListaCompras.css";

const compras = 
[
    "Arroz", 
    "Feijão", 
    "Macarrão",
    "Azeite",
    "Leite",
    "Carne"
];

export function ListaCompras (){
    const itensCompras = compras.map((nomeItem) =>{
        return <li>{nomeItem}</li>
    });

    return(
        <>
        <h2>Lista de compras</h2>
        <ul>{itensCompras}</ul>
        </>
    );
};