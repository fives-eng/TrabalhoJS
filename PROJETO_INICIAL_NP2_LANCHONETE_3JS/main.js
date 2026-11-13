// Trabalho NP2 — fluxo principal.
// Utilize as funções de pedidos.js e relatorios.js neste arquivo.
import * as relatorio from "./relatorios.js"

import * as pedido from "./pedidos.js"



function cadastrarPedido(){
    let codigo = Number(prompt("codigo do pedido: "));
    let nomeCliente = prompt("Nome do cliente: ");
    let valor = Number(prompt("Valor do pedido: "));


}
relatorio.exibirResumo()

function lerTexto(mensagem){
    let texto = prompt(mensagem)
    if (mensagem===null){
        return ''
    }
    return (lerTexto)
}
function lerNumero(mensagem){
    texto = lerNumero(mensagem)
    if (mensagem === ''){
        return NaN
    }
    return (lerNumero)
}


function textoMenu(){
    return[
        `1- Cadastrar`
        `2- Listar`
        `3 Buscar`
        `4 Entregar`
        `5- resumo`
        `6 - resumo em JSON`
        `0 - sair`
    ]
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
            functioncadastrarPedido();
            break 
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

            

    }
    
    // TODO: implementar o menu usando prompt(), estruturas de repetição,
    // condicionais e chamadas às funções dos outros arquivos JavaScript.
    // Opções: 1 cadastrar; 2 listar; 3 buscar; 4 entregar;
    // 5 resumo; 6 resumo em JSON; 0 sair.
}

// TODO: chamar iniciarSistema() quando a implementação estiver pronta.
