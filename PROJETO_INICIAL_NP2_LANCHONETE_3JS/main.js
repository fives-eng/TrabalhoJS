// Trabalho NP2 — fluxo principal.
// Utilize as funções de pedidos.js e relatorios.js neste arquivo.
import * as relatorio from "./relatorios.js"

import * as pedido from "./pedidos.js"

let pedido = [
    {codigo: 101, cliente: "Ana", valor: "25.50", entregue: false}
]
function textoMenu(){
        let opcoes = Number(prompt("Opção 1 - cadastrar"));
        let opcao_lista = Number(prompt("Opção 2 - listar"))
        let opcao_busca = Number(prompt("Opção 3-buscar"))
        let opcao_entrega = Number(prompt("Opção 4 -entregar"))
        let opcao_resumo = Number(prompt("opção 5 - Resumo"))
        let opcao_JSON = Number(prompt("Opção 6 - Resumo Json"))
        let opcao_sair = Number(prompt("Opção 0 - sair"))
    
}

function buscarpedido(){
    let codigo = Number(prompt("Codigo a usar: "));
    locaçoes = buscarpedido(pedido,codigo);
    if (codigo  === ''){
        console.log ('Codigo não encontrado')
    }else{
        console.log ('codigo localizado com sucesso!')
        locaçoes = (formatarbuscarpedido(pedido,codigo))
    }
        
}




function iniciarSistema() {
    opcao = ' '
    while (opçao !== 0){
        opçao = textoMenu();
        if (opçao == ''){
            console.log("opção invalida")
        }
    }
    switch(iniciarSistema()){
        case '1':
            relatorio.cadastrar();
            break;
        case '2':
            pedido.listarPedidos();
            break;
        case '3':
            functionbuscarPedido();
            break;
        case '4': 
            pedido.entregarPedido();
            break;
        case '5':
            relatorio.exibirResumo(); 
            break; 
        case '6':
            relatorio.gerarResumoJSon();
            break;
        case '0':
            break;
        default:
            console.log("opção invalida")

            

    }
    
    // TODO: implementar o menu usando prompt(), estruturas de repetição,
    // condicionais e chamadas às funções dos outros arquivos JavaScript.
    // Opções: 1 cadastrar; 2 listar; 3 buscar; 4 entregar;
    // 5 resumo; 6 resumo em JSON; 0 sair.
}

// TODO: chamar iniciarSistema() quando a implementação estiver pronta.
