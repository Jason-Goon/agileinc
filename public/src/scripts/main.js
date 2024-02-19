// src/scripts/main.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


  
  
  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function() {
      menu.classList.toggle('hidden');
    });
  });



// Form validation