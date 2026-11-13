// Trabalho NP2 — funções de relatórios.
// Os pedidos estão armazenados no array 'pedidos', definido em pedidos.js.

function exibirResumo(resumo) {
    console.log("===Resumo===");
    console.log("Total de vendas" + resumo.totalVendas);
    console.log("Entregues" + resumo.entregues);
    console.log("Total previsto em R$:" + resumo.valorTotalPrevisto)
}

function gerarResumoJSON(){
    let resumo = exibirResumo(resumo);
    return JSON.stringify(resumo, null, 2);
}