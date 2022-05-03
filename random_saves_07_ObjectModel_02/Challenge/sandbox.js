// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    };

    if (p.textContent.includes('success')) {
        p.classList.add('success')
    }
});

// Toggling class

const title = document.querySelector('.title');
// Add in the first time and remove in the second
title.classList.toggle('test');
title.classList.toggle('test');