// Menu Icon Navbar

let menuIcon= document.querySelector('#menu-icon');
let navBar= document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

// scroll interactive
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () =>{
    
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky nav
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 80);

    // remove navbar
menuIcon.classList.remove('bx-x');
navBar.classList.remove('active');
};



// swipper
var swiper = new Swiper('.mySwiper',{
    slidesPerview: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
});

// dark light mode

let darkModeIcon = document.querySelector('#darkMode-icon')

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

//Scroll reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box,.video-wrapper, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img',{origin:'left'});
ScrollReveal().reveal('.home-content h3, home-content p, about-content',{origin:'right'});
