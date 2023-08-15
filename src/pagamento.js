//Função para validas formas de pagamento
export function Pagamento(metodoDePagamento, ValorTotal){
    if(metodoDePagamento === 'dinheiro'){
        //Pagamento em dinheiro tem 5% de desconto
        ValorTotal -= ValorTotal*0.05;
        return 'R$ ' + ValorTotal.toFixed(2).replace('.',',');
    }else if(metodoDePagamento === 'credito'){
        //Pagamento a crédito tem acréscimo de 3% no valor total
        ValorTotal += ValorTotal*0.03;
        return 'R$ ' + ValorTotal.toFixed(2).replace('.',',');
    }else if(metodoDePagamento === 'debito'){
        return 'R$ ' + ValorTotal.toFixed(2).replace('.',',');
    }else{
        throw new Error("Forma de pagamento inválida!");
    } 
}