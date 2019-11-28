'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');


const navSlide = () => {

    burger.addEventListener('click', () => {
        if (!nav.classList.contains('nav-active')) {
            nav.style.display = 'flex';
            setTimeout(() => {
                nav.classList.add('nav-active');
            }, 100);
        } else {
            nav.classList.remove('nav-active');
            setTimeout(() => {
                nav.style.display = 'none';
            }, 700);
        }
        burger.classList.toggle('toggle');
    });
}
navSlide();

window.onresize = () => {
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
};




