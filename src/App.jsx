import { ListaCompras } from "./components/ListaCompras/ListaCompras";
import { ListaFuncionarios } from "./components/ListaFuncionarios/ListaFuncionarios";
import { NavBar } from "./components/NavBar/NavBar";
import {ListaAlunos} from "./components/Exercicios/ListaAlunos"
import { Numeros } from "./components/Exercicios/Numeros";

export function App (){
    return(
    <>
        {/* <ListaCompras/>
        <ListaFuncionarios/>
        <NavBar logado={true} nomeUsuario="Luiz"/>
        <NavBar logado={true} nomeUsuario="Farid"/>
        <NavBar logado={false} nomeUsuario="Jéssica"/> */}
        <ListaAlunos/>
        <Numeros numero={4}/>
    </>
    );
};