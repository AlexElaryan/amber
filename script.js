const burgerBtn = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('header nav');

burgerBtn.onclick = () => {
    burgerMenu.classList.toggle('burger-active');
}

const introPic = document.querySelector('.intro > img');

function changeintropic() {
    if (window.innerWidth < 900) {
        introPic.src = 'img/introbgmob.png';
    } else if (window.innerWidth > 900) {
        introPic.src = 'img/introbg.png';
    }
}

changeintropic();
window.addEventListener('resize', changeintropic);

const bodyFilter = document.querySelector('.body-filter');
const modal = document.querySelectorAll('.modal');
const feedbackModalOpenBtn = document.querySelectorAll('.feedback-open-btn');
const contactModalOpenBtn = document.querySelectorAll('.contact-open-btn');


function modalOpen(modal) {
    modal.classList.add('active-modal');
    bodyFilter.classList.add('body-filter-active');
}

function modalClose(modal) {
    modal.classList.remove('active-modal');
    bodyFilter.classList.remove('body-filter-active');
}

bodyFilter.onclick = () => {
    modal.forEach(c => modalClose(c));
}

feedbackModalOpenBtn.forEach(el => {
    el.onclick = () => {
        modalOpen(document.querySelector('.feedback-modal'));
    }
})

contactModalOpenBtn.forEach(el => {
    el.onclick = () => {
        modalOpen(document.querySelector('.contact-modal'));
    }
})

