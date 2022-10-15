//Hamburger Menu
const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.nav_menu');

const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

/* Smooth Scroll */
const navLogo = document.querySelector('#nav_logo');

//Show active menu when scrolling
const highlightMenu = () =>{
    const elem = document.querySelector('.highlight');
    const homeMenu= document.querySelector('#home-page');
    const aboutMenu= document.querySelector('#about-page');
    const serviceMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;


//add 'highlight' classto my menu items
if(window.innerWidth > 960 && scrollPos < 600){
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
}else if(window.innerWidth > 960 && scrollPos < 1400){
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    serviceMenu.classList.remove('highlight');
    return;
}
else if(window.innerWidth > 960 && scrollPos < 2345){
    aboutMenu.classList.remove('highlight');
    serviceMenu.classList.add('highlight');
    return;
}

if(elem && window.innerWidth < 960 && scrollPos < 600 || elem){
    elem.classList.remove('highlight');
}

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);