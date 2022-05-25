let informe = document.getElementById('result');

let gastos = {
    receitas: 
    [
     78.55,
     39.54,
     87.98,
     92.15
    ],

    despesas: 
    [
        28.75,
        32.54, 
        44.22, 
        135.87
    ]
}


function calcular(total){
    let totalReceita = 0
    let totalDespesas = 0

    for(let i = 0; i < gastos.receitas.length; i++) {

        totalReceita = totalReceita + gastos.receitas[i];
    }

    for(let i = 0; i < gastos.despesas.length; i++){

    totalDespesas = totalDespesas + gastos.despesas[i];
    }

    total = totalReceita - totalDespesas  
    return total.toFixed(2) 
    
}

if(calcular() >= 0){
    informe.innerHTML = `A familia está com o saldo positivo de: R$ ${calcular()}`
} else {
    informe.innerHTML = `A familia está com o saldo negativo de: R$${calcular()}`
}




