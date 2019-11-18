const showcaseContainer = document.querySelector('.showcase-container');
const showcaseImg1 = showcaseContainer.querySelector('.showcase-car-1');
const showcaseImg2 = showcaseContainer.querySelector('.showcase-car-2');
const showcaseImg3 = showcaseContainer.querySelector('.showcase-car-3');
const showcaseImg4 = showcaseContainer.querySelector('.showcase-car-4');
const selections = showcaseContainer.querySelector('.selections');
const selection1 = selections.querySelector('.selection-1');
const selection2 = selections.querySelector('.selection-2');
const selection3 = selections.querySelector('.selection-3');
const selection4 = selections.querySelector('.selection-4');

showcaseImg2.style.display = 'none';
showcaseImg3.style.display = 'none';
showcaseImg4.style.display = 'none';

selections.addEventListener('click', (event) => {
    const selection = event.target;

    switch (selection) {
        case selection1:
            showcaseImg1.style.display = 'block';
            showcaseImg2.style.display = 'none';
            showcaseImg3.style.display = 'none';
            showcaseImg4.style.display = 'none';
            break;
        case selection2:
            showcaseImg1.style.display = 'none';
            showcaseImg2.style.display = 'block';
            showcaseImg3.style.display = 'none';
            showcaseImg4.style.display = 'none';
            break;
        case selection3:
            showcaseImg1.style.display = 'none';
            showcaseImg2.style.display = 'none';
            showcaseImg3.style.display = 'block';
            showcaseImg4.style.display = 'none';
            break;
        case selection4:
            showcaseImg1.style.display = 'none';
            showcaseImg2.style.display = 'none';
            showcaseImg3.style.display = 'none';
            showcaseImg4.style.display = 'block';
            break;
    }

});
