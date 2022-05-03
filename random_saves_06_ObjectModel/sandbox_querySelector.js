const para = document.querySelector('body > h1');

console.log(para);


const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para);
});

console.log('Space');

const erros = document.querySelectorAll('.error');

erros.forEach(er => {
    console.log(er);
});