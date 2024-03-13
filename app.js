const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);
menuLinks.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 650) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 960 && scrollPos < 1800) {
        aboutMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        return;
    }

    else if(window.innerWidth > 960 && scrollPos < 3100) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if((element && window.innerWidth < 960 && scrollPos < 600) || element) {
        element.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);