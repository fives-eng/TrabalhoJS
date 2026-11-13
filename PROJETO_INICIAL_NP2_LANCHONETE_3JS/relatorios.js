// Trabalho NP2 — funções de relatórios.
// Os pedidos estão armazenados no array 'pedidos', definido em pedidos.js.
export function cadastrarPedido(){
    let codigo = Number(prompt("Informe o código"));
    let cliente = prompt("Nome do cliente");
    let valor = Number(prompt("Informe o valor"));
    let entregue = prompt("Pedido foi entregue? sim/nao")

    if (isNaN(codigo) || cliente === '' || isNaN(valor) || valor <= 0 || entregue === "nao"){
        console.log("dados invalidos");
        return;
    }
    if (registrarPedido(codigo, cliente, valor, entregue)){
        console.log("Pedido registrado")}
        else{
            console.log("Já existe um pedido com esse código")
        }
}


 export function exibirResumo(resumo) {
    console.log("===Resumo===");
    console.log("Total de vendas" + resumo.totalVendas);
    console.log("Entregues" + resumo.entregues);
    console.log("Total previsto em R$:" + resumo.valorTotalPrevisto)
}

 export function gerarResumoJSON(){
    let resumo = exibirResumo(resumo);
    return JSON.stringify(resumo, null, 2);
}