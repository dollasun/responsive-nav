const burger = document.querySelector('.burger_menu');
const navLinks = document.querySelector('.nav_links');
const links = document.querySelectorAll('.nav_links_a');
const linksLi = document.querySelectorAll('.nav_links_li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    linksLi.forEach(link => {
        link.classList.toggle('fade');
    })
})
