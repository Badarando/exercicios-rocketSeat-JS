let btnRoxo = document.querySelector('#openModal');
let btnCentro = document.querySelector('.modal-wrapper');

btnRoxo.addEventListener("click", clicar)

function clicar() {
    btnRoxo.nextElementSibling.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){ 
    const isEscKey = event.key == 'Escape'
    const veja =  btnCentro.classList
   

    if(isEscKey && !veja.contains('invisible')) {
        btnCentro.classList.add('invisible')
        console.log('esta rodando a função')
    }

})
// btnCentro.addEventListener("keydown", (event)) = {
//     btnCentro.classList.add('invisible')
//     console.log()
// ),}


