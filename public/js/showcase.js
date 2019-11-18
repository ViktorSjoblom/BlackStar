const showcaseContainer = document.querySelector('.showcase-container');
const showcaseImg = showcaseContainer.querySelector('img');
const selections = showcaseContainer.querySelector('.selections');
const selection1 = selections.querySelector('.selection-1');
const selection2 = selections.querySelector('.selection-2');
const selection3 = selections.querySelector('.selection-3');
const selection4 = selections.querySelector('.selection-4');

selections.addEventListener('click', (event) => {
    const selection = event.target;

    switch (selection) {
        case selection1:
            showcaseImg.src = './img/showcase-car-1.jpg';
            break;
        case selection2:
            showcaseImg.src = './img/showcase-car-2.jpeg';
            break;
        case selection3:
            showcaseImg.src = './img/showcase-car-3.jpg';
            break;
        case selection4:
            showcaseImg.src = './img/showcase-car-4.jpeg';
            break;
    }
});
