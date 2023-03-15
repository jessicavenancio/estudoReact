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

const produtos =
[
    { cod: 1, nome: 'Arroz', quantidade: 5, precoUnitario: 5.5 },
    { cod: 2, nome: 'Feijão', quantidade: 3, precoUnitario: 10.5 },
    { cod: 3, nome: 'Macarrão', quantidade: 10, precoUnitario: 15 },
    { cod: 4, nome: 'Azeite', quantidade: 5, precoUnitario: 25 },
];

export function ListaCompras (){
    const itensCompras = compras.map((nomeItem, index) =>{
        return <li key={index}>{nomeItem}</li>
    });


    const itemProduto = produtos.map((produto) =>{
        return <div key={produto.cod} className="cardCompra"> 
            <h2>{produto.nome}</h2>
            <p>Quantidde: {produto.quantidade}</p>
            <p>Subtotal: R${produto.precoUnitario * produto.quantidade}</p>
        </div>
    });

    return(
        <>
        <h2 id="titulo">Lista de compras</h2>
        <ul>{itensCompras}</ul>
        <h2>Lista produtos</h2>
        <div>{itemProduto}</div>
        <hr/>


        </>
    );
};