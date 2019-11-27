'use strict';

const showcaseContainer = document.querySelector('.showcase-container');
const showcaseImage = showcaseContainer.querySelector('.showcase-images');
const showcaseDivs = showcaseImage.querySelectorAll('img');
console.log(showcaseDivs);
const showcaseImg1 = showcaseContainer.querySelector('.showcase-car-1');
const showcaseImg2 = showcaseContainer.querySelector('.showcase-car-2');
const showcaseImg3 = showcaseContainer.querySelector('.showcase-car-3');
const showcaseImg4 = showcaseContainer.querySelector('.showcase-car-4');
const selections = showcaseContainer.querySelector('.selections');
const selectionDivs = selections.querySelectorAll('div');
const selection1 = selections.querySelector('.selection-1');
const selection2 = selections.querySelector('.selection-2');
const selection3 = selections.querySelector('.selection-3');
const selection4 = selections.querySelector('.selection-4');

const hideImages = () => {
    showcaseDivs.forEach(element => {
        element.style.display = 'none';
    });
}

hideImages();
showcaseImg1.style.display = 'block';
selection1.classList.add('active-selection');

selections.addEventListener('click', (event) => {
    const selection = event.target.parentNode;

    const toggleClass = () => {
        selectionDivs.forEach(element => {
            element.classList.remove('active-selection');
        });
        selection.classList.add('active-selection');
    }

    switch (selection) {
        case selection1:
            hideImages();
            showcaseImg1.style.display = 'block';
            toggleClass();
            break;
        case selection2:
            hideImages();
            showcaseImg2.style.display = 'block';
            toggleClass();
            break;
        case selection3:
            hideImages();
            showcaseImg3.style.display = 'block';
            toggleClass();
            break;
        case selection4:
            hideImages();
            showcaseImg4.style.display = 'block';
            toggleClass();
            break;
    }
});


