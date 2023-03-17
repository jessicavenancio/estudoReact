import "./Product.css";

export function Product ({img, name, description, price}){
    return(
        <>
        <div className="product">
            <img src={img} alt="imagem"/>
            <h3>{name}</h3>
            <span>{description}</span>
            <strong>R$ {price}</strong>
        </div>
        </>
    );
};