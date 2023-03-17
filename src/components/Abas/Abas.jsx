import "./Abas.css";
import { useState } from "react";


export function Abas(){

    //let aba = "ajuda"; //home, perfil ou ajuda
    const [aba , setAba] = useState("home");

    // function irHome(){
    //     setAba("home");
    // }
    function irPerfil(){
        setAba("perfil");
    }
    function irAjuda(){
        setAba("ajuda")
    }

    let conteudoAba;
    if(aba === "home"){
        conteudoAba = <div>HOME</div>
    }else if(aba === "perfil"){
        conteudoAba = <div>PERFIL</div>
    }else if(aba === "ajuda"){
        conteudoAba = <div>AJUDA</div>
    }

    return(
        <div className="abas">
            {/* Com arrow não precisamos definir as funções acima no componente */}
            <button onClick={()=> setAba("home")}>Home</button>
            <button onClick={irPerfil}>Perfil</button>
            <button onClick={irAjuda}>Ajuda</button>
            <hr />
            {conteudoAba}
        </div>
    );

    // if(aba === "home")
    // {
    // return(
    //     <div className="abas">
    //         <button>Home</button>
    //         <button>Perfil</button>
    //         <button>Ajuda</button>
    //         <hr />
    //         <div>Home</div>
    //     </div>
    // );
    // }else if(aba === "perfil")
    // {
    //     return(
    //         <div className="abas">
    //             <button>Home</button>
    //             <button>Perfil</button>
    //             <button>Ajuda</button>
    //             <hr />
    //             <div>Perfil</div>
    //         </div>
    //     );
    // }else if(aba === "ajuda")
    // {
    //         return(
    //             <div className="abas">
    //                 <button>Home</button>
    //                 <button>Perfil</button>
    //                 <button>Ajuda</button>
    //                 <hr />
    //                 <div>Ajuda</div>
    //             </div>
    //         );
    // };
};
