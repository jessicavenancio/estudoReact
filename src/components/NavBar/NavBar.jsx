import "./NavBar.css";


//props = propriedades de um componente
//Rederização condicional = mudar o visual e estrutura do
//componente de acordo com algum valor

export function NavBar({logado, nomeUsuario, img}){
    // const logado = props.logado;
    let mensagem;

    if(logado === true){
        mensagem = <p>Bem vindo(a) {nomeUsuario}</p>;
    }else{
        mensagem = <p>Olá {nomeUsuario}! Clique <a href="#">aqui</a> e faça seu cadastro.</p>
    } 

    return(
        <div>
            <hr/>
            {logado && <img src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png" alt="foto" width="25"/>}
            {mensagem}
            <ul>
            <li><a href="http:#">Home</a></li>
            <li><a href="http:#">Produtos</a></li>
            <li><a href="http:#">Ajuda</a></li>
            {logado && <li><a href="#">Perfil</a></li>}
            {!logado && <li><a href="#">Cadastre-se</a></li>}
            </ul>
            <hr/>
        </div>
    );
};


// if(logado === true){
//     return(
//         <div>
//             <hr/>
//             <p>Bem vindo(a) {nomeUsuario}</p>
//             <ul>
//                 <li><a href="http:#">Home</a></li>
//                 <li><a href="http:#">Produtos</a></li>
//                 <li><a href="http:#">Ajuda</a></li>
//             </ul>
//             <hr/>
//         </div>
//     );
// }else{
//     return(
//         <div>
//             <hr/>
//             <p>Olá {nomeUsuario}! Clique <a href="#">aqui</a> e faça seu cadastro.</p>
//             <ul>
//                 <li><a href="http:#">Home</a></li>
//                 <li><a href="http:#">Produtos</a></li>
//                 <li><a href="http:#">Ajuda</a></li>
//             </ul>
//             <hr/>
//         </div>         
//     )
// }