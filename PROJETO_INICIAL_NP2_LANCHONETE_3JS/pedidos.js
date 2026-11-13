// Pedidos fictícios para iniciar os testes. Novos pedidos devem ser adicionados a este array.
let pedidos = [
    { codigo: 101, cliente: "Ana", valor: 25.50, entregue: false },
    { codigo: 102, cliente: "Bruno", valor: 18.00, entregue: true },
    { codigo: 103, cliente: "Carla", valor: 32.90, entregue: false }
];

// Implemente abaixo as operações de gerenciamento dos pedidos.
function cadastrarPedido() {
    // TODO: solicitar os dados, validar e adicionar um novo pedido ao array.
}

function listarPedidos() {
    // TODO: listar os pedidos cadastrados.
}

function buscarPedido(codigo) {
    // TODO: retornar o pedido correspondente ao código, se existir.
}

function entregarPedido(codigo) {
    // TODO: alterar a situação de entrega do pedido encontrado.
}
