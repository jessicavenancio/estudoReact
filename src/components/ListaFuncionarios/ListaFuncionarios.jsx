import "./ListaFuncionarios.css";

const funcionarios = [
    {
        cod: 1,
        nome: "Gabriel Braga",
        email: "gabriel.braga@email.com",
        endereco: { cidade: "Ubajara", estado: "CE" },
    },
    {
        cod: 2,
        nome: "José Almir",
        email: "jose.almir@email.com",
        endereco: { cidade: "Tianguá", estado: "CE" },
    },
    {
        cod: 3,
        nome: "Carlos Antônio",
        email: "carlos.antonio@email.com",
        endereco: { cidade: "São Paulo", estado: "SP" },
    },
    {
        cod: 4,
        nome: "Maria de Souza",
        email: "maria.souza@email.com",
        endereco: { cidade: "São Paulo", estado: "SP" },
    },
];

export function ListaFuncionarios() {
    const conteudoTabela = funcionarios.map((funcionario) => {
        return (
            <tr key={funcionario.cod}>
                <td>{funcionario.cod}</td>
                <td>{funcionario.nome}</td>
                <td>{funcionario.email}</td>
                <td>{funcionario.endereco.cidade + " - " + funcionario.endereco.estado}</td>
            </tr>
        );
    });

    return (
        <table className="tabela-func">
            <thead>
                <tr>
                    <th>Cód.</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Endereço</th>
                </tr>
            </thead>
            <tbody>
                {/* Linha modelo
                <tr>
                    <td>1</td>
                    <td>Jéssica Venâncio</td>
                    <td>jessica@gmail.com</td>
                    <td>Sua casa</td>
                </tr> */}
                {conteudoTabela}
            </tbody>
        </table>
    );
};