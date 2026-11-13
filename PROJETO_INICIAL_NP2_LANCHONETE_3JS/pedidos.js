// Pedidos fictícios para iniciar os testes. Novos pedidos devem ser adicionados a este array.
let pedidos = [
    { codigo: 101, cliente: "Ana", valor: 25.50, entregue: false },
    { codigo: 102, cliente: "Bruno", valor: 18.00, entregue: true },
    { codigo: 103, cliente: "Carla", valor: 32.90, entregue: false }
];

// Implemente abaixo as operações de gerenciamento dos pedidos.
export function cadastrarPedido(pedidos,codigo,cliente,valor) {
    // TODO: solicitar os dados(fiz), validar(fiz) e adicionar um novo pedido ao array(fiz).
    valor = number(prompt("digite o valor:"))
    if (buscarPedido(pedidos,codigo)!==null){
        return false
    }
    let novopedido = {
        codigo:codigo,
        cliente:cliente,
        valor:valor,
        entregue:false
    }
    pedidos.push(novopedido)
    return true
}
export function listarPedidos(pedidos) {
    if (pedidos.length===0){
        console.log("nenhum pedido cadastrado")
        return;
    }
    for (let i=0;i<pedidos.length;i++)
        console.log(pedidos[i])

    // TODO: listar os pedidos cadastrados.
}

export function buscarPedido(pedidos,codigo) {
    for (let i=0;i<pedidos.length;i++){
        if (pedidos[i].codigo===codigo){
            return pedidos[i]
        }
    }
    return null
    }
    // TODO: retornar o pedido correspondente ao código, se existir.
}

export function entregarPedido(pedidos,codigo) {
    let entrega= buscarPedido(pedidos,codigo)
    if (entrega === null){
        return "nao encontrada"
    }
    if(entrega.entregue===true){
        return "ja entregue"
    }
    entrega.entregue=true
    return "ok"
    

    // TODO: alterar a situação de entrega do pedido encontrado.
}
