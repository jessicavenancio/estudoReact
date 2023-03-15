const textoTitulo = "Apendendo react na Soul Code";
const nomeAutor = "J. Venâncio";
const linkImg = "https://picsum.photos/300";

export function Mensagem(){
    
    return (
    <section className="mensagem">
        <h2 className="titulo">{textoTitulo.toLocaleUpperCase()}</h2>
        <img src= {linkImg} alt="imagem"/>
        <p className="paragrafo">
            Mussum Ipsum, cacilds vidis litro abertis. A  ordem dos tratores não altera o pão duris.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Leite de capivaris, leite de mula manquis sem cabeça.
        </p>
        <small>Essa frase foi criada por {nomeAutor}.</small>
    </section>
    );
};

// const styles = {
//     titulo:{
//         fontSize: 13,
//     }
// }