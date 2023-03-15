import "./Titulo.css";

export const Titulo = (props) => { //Título é o nome do componente
    //children => propriedade padrão do props representa o que está dentro da tag
    const textoTitulo = props.children;

    let objectStyle = {
        borderLeftColor: props.borderLeftColor,
        backgroundColor: props.backgroundColor,
        textSize : props.textSize
    }
    
    //return é a parte visual
    return <h1 className="titulo" style={objectStyle}>{textoTitulo}</h1>;
};

//Forma resumida
// export function Titulo({borderLeftColor, backgroundColor, children}) {
//     return (
//         <h1 className="titulo" style={{borderLeftColor, backgroundColor}}>
//         {children}
//         </h1>
//     );
// }