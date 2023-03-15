// Crie um componente Postagem que possui:
// 	- Uma imagem como demonstração da postagem;
// 	- Um corpo de seção com <Titulo>;
// 	- Aplique estilizações nos elementos desse componente;

const linkImg = "https://picsum.photos/300";

export const Postagem = () =>{
    return (
        <section className="section-postagem">
            <h1>Atividade React</h1>
            <img src= {linkImg} alt="imagem"/>
            <p>
                Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris.Manduma pindureta quium dia nois paga.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Interagi no mé, cursus quis, vehicula ac nisi.
            </p>
        </section>
    );
};