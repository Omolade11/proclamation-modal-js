'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.close-modal');
const buttons = document.querySelectorAll('.show-modal');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openModal);
}

modalClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// add event listener everywhere on the page
document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})