let nota = window.prompt('Digite a nota do aluno');
let resultado = document.getElementById('result');

// resultado.innerHTML = `<p>Aqui está a nota do aluno: ${nota}</p>`;

if(nota >= 90) {
    nota = 'A'
} else if(nota < 90 && nota >= 80) {
    nota = 'B'
} else if(nota < 80 && nota >= 70) {
    nota = 'C'
} else if(nota < 70 && nota >= 60) {
    nota = 'D'
} else {
    nota = 'F'
}

resultado.innerHTML = `<p>Aqui está a nota do aluno: ${nota}</p>`;


