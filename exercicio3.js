const dados = window.prompt('Qual a temperatura? digite com o prefixo (ºC ou ºF)').toUpperCase();


function conversao(resultado){
    let numero = 0;
    let conversao = 0;
    let mensagem = document.getElementById('result');;

    if(dados.includes('ºC')) {
        numero = dados.replace("ºC", " ");
        conversao = (Number(numero) * 9) / 5 + 32;
        resultado = mensagem.innerHTML = `<p>A temperatura em celcius é de: ${dados}, e em fahranheit é de: ${conversao.toFixed(1)} ºF`
        return resultado 
    } else if (dados.includes('ºF')){
        numero = dados.replace("ºF", " ")
        conversao = (Number(numero) - 32) * 5 / 9
        resultado = mensagem.innerHTML = `<p>A temperatura em fahranheit é de: ${dados}, e em celcius é de: ${conversao.toFixed(1)} ºC`
        return resultado

    } else {
        throw new Error(resultado = mensagem.innerHTML = `<p>Grau não identificado, por favor colocar prefixo. <b>Exemplo:</b> ${dados} <mark>ºC</mark></p>`)
    }
    
}

conversao();

 

