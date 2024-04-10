// src/scripts/main.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onload = function() {
const stacks = document.querySelectorAll('.card-stack');

stacks.forEach(stack => {
    const cards = Array.from(stack.querySelectorAll('.card'));
    let activeIndex = 0; 
    let isClickable = true; 

    cards.forEach((card, index) => {
        if (index !== 0) {
            card.style.top = '100%';
            card.style.visibility = 'hidden';
        } else {
            card.classList.add('active'); 
            card.style.visibility = 'visible';
        }
    });

    const nextArrow = stack.querySelector('.next-arrow');
    nextArrow.addEventListener('click', function() {
        if (!isClickable) return; 
        isClickable = false; 
        setTimeout(() => isClickable = true, 1100); 
        
        const currentActive = cards[activeIndex];
        const nextIndex = (activeIndex + 1) % cards.length;
        const nextCard = cards[nextIndex];

        currentActive.classList.remove('active');
        currentActive.style.top = '-100%';
        currentActive.style.visibility = 'hidden';

        nextCard.classList.add('active');
        nextCard.style.top = '0'; 
        nextCard.style.visibility = 'visible';
        
        setTimeout(() => {
            currentActive.style.top = '100%'; 
        }, 700); 

        activeIndex = nextIndex; 
    });
});
};

  
  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function() {
      menu.classList.toggle('hidden');
    });
  });


