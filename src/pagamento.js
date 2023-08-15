function pagamento(metodoDePagamento, ValorTotal){
    if(metodoDePagamento === 'dinheiro'){
        ValorTotal -= ValorTotal*0.05;
        return 'R$ ' + ValorTotal.toFixed(2).replace('.',',');
    }else if(metodoDePagamento === 'credito'){
        ValorTotal += ValorTotal*0.03;
        return 'R$ ' + ValorTotal.toFixed(2).replace('.',',');
    }else if(metodoDePagamento === 'debito'){
        return 'R$ ' + ValorTotal.toFixed(2).replace('.',',');
    }else{
        throw new Error("Forma de pagamento inválida!");
    } 
}