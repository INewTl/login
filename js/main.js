const login = document.querySelector('.logar-conta');
const criarConta = document.querySelector('.registrar');
const container = document.querySelector('.container');
const fundo = document.querySelector('.fundo');

criarConta.onclick = function () {
    container.classList.add('loginContainer');
}

login.onclick = function () {
    container.classList.remove('loginContainer');
}

function criarEstrela () {
    const numEstrela = 100;

    for(let cont=0; cont<numEstrela; cont++) {
        const estrela = document.createElement('span');
        estrela.className = 'estrela';
        estrela.style.top = `${Math.random() * 40}%`;
        estrela.style.left = `${Math.random() * 100}%`;
        estrela.style.animationDuration = `${Math.random() * 2 + 0.5}s`;

        const estrelaMaior = document.createElement('span');
        estrelaMaior.className = 'estrela-maior';
        estrelaMaior.style.top = `${Math.random() * 40}%`;
        estrelaMaior.style.left = `${Math.random() * 100}%`;
        estrelaMaior.style.animationDuration = `${Math.random() * 2 + 0.5}s`;

        fundo.appendChild(estrela);
        fundo.appendChild(estrelaMaior);
    }
}

criarEstrela();

