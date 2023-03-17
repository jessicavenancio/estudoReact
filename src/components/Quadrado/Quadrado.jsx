import "./Quadrado.css";

export function Quadrado (){
    function quandoClicar (){
        alert("Clicooou!")
    };
    
    function quandoMouseEntrar(evento){
        const quadrado = evento.target;
        quadrado.style.backgroundColor = "aqua";
    }

    function quandoMouseSair(evento){
        const quadrado = evento.target;
        quadrado.style.backgroundColor = "cadetblue";
    }

    function duploClick(evento){
        const quadrado = evento.target;
        quadrado.style.backgroundColor = "orange";
    }

    return(
        <div 
            className="quadrado"
            // onClick={quandoClicar}
            quandoMouseEntrar={quandoMouseEntrar}
            onMouseEnter={quandoMouseEntrar}
            onMouseLeave={quandoMouseSair}
            onDoubleClick={duploClick}
            
        >
            
        </div>
    );
};