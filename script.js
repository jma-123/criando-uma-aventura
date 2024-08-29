const avança= document.querySelectorAll('.btn-proximo');

avança.forEach(button => {
button.addEventListener('click', function(){
const atual = document.querySelector('.ativo');
const proximopaso = 'passo-' + this.getAttribute('data-proximo');

atual.classList.remove('ativo');
document.getElementById(proximopasso).classList.add('ativo');
})
})