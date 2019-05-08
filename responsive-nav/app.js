const burger = document.querySelector('.burger');
const navbar = document.querySelector('ul');
const navlist = document.querySelectorAll('li');

burger.addEventListener('click', function(){
    navbar.classList.toggle('active');
    
}, false)
