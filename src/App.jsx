import { ListaCompras } from "./components/ListaCompras/ListaCompras";
import { ListaFuncionarios } from "./components/ListaFuncionarios/ListaFuncionarios";
import { NavBar } from "./components/NavBar/NavBar";
import {ListaAlunos} from "./components/Exercicios/ListaAlunos"
import { Numeros } from "./components/Exercicios/Numeros";
import { ProductList } from "./components/ProductList/ProductList";
import { Quadrado } from "./components/Quadrado/Quadrado";
import { Contador } from "./components/Contador/Contador";
import { ContadorExercicio } from "./components/Contador/ContadorExcercicio";
import { Cadastro } from "./components/Cadastro/Cadastro";
import { Desafio } from "./components/Desafio/Desafio";
import { Sorteador } from "./components/Exercicios/Sextou/Sorteador";
import { Abas } from "./components/Abas/Abas";
import { Quiz } from "./components/Quiz/Quiz";



export function App (){
    return(
    <>
        {/* <ListaCompras/>
        <ListaFuncionarios/>
        <NavBar logado={true} nomeUsuario="Luiz"/>
        <NavBar logado={true} nomeUsuario="Farid"/>
        <NavBar logado={false} nomeUsuario="Jéssica"/> */}
        {/* <ListaAlunos/>
        <Numeros numero={4}/> */}
        {/* <ProductList/> */}
        {/* <Quadrado/> */}
        {/* <Contador/> */}
        {/* <ContadorExercicio/> */}
        {/* <Cadastro/> */}
        {/* <Desafio/> */}
        {/* <Sorteador/>*/}
        {/* <Abas/> */}

        <Quiz/>
    </>
    );
};