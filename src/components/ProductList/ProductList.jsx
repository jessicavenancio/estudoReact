import { Product } from "./Product";

export function ProductList (){
    return(
        <>
        <Product
        img="https://m.media-amazon.com/images/I/81+xlh0eUIL._AC_UL320_.jpg"
        name="Lego"
        description="Brinquedo para crianças"
        price="200"
        />
        <Product
        img="https://legobrasil.vteximg.com.br/arquivos/ids/179851-300-300/11022_Lego_Classic_Missao_Espacial_01.jpg?v=637955828263700000"
        name="Lego"
        description="Brinquedo para crianças"
        price="180"
        />
        <Product
        img="https://legobrasil.vteximg.com.br/arquivos/ids/179851-300-300/11022_Lego_Classic_Missao_Espacial_01.jpg?v=637955828263700000"
        name="Lego"
        description="Brinquedo para crianças"
        price="180"
        />
        </>
    );
};