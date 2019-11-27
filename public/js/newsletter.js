const newsletterButtons = document.querySelectorAll('.newsletter-button');

const exitButton = document.querySelector('.exit-button');

newsletterButtons.forEach(newsletterButton => {
    newsletterButton.addEventListener('click', () => {
        const newsletter = document.querySelector('.newsletter-mobile');
    
        newsletter.classList.add('newsletter-mobile-active');
    
        if (newsletter.classList.contains('newsletter-mobile-active')) {
            exitButton.addEventListener('click', () => {
                newsletter.classList.remove('newsletter-mobile-active');
            });
        }
    });
    
});


