 // Toggle mobile menu
 const menuToggle = document.querySelector('.menu-toggle');
 const navLinks = document.querySelector('.nav-links');

 menuToggle.addEventListener('click', () => {
   navLinks.classList.toggle('show');
 });

 // Toggle dropdown on mobile
 const dropdowns = document.querySelectorAll('.dropdown');

 dropdowns.forEach(dropdown => {
   dropdown.querySelector('a').addEventListener('click', (e) => {
     if(window.innerWidth <= 768) {
       e.preventDefault();
       dropdown.classList.toggle('show-dropdown');
     }
   });
 });
