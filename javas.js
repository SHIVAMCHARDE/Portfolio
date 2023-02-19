// Smooth scrolling
const links = document.querySelectorAll('nav a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Lightbox
const images = document.querySelectorAll('section img');

for (const image of images) {
    image.addEventListener('click', openLightbox);
}

function openLightbox
    (event) {
    const imageUrl = this.getAttribute('src');
    const lightbox = document.createElement('div');
    lightbox.innerHTML = `<div class="lightbox-container"> <img src="${imageUrl}" alt=""> <button class="btn close-btn">Close</button> </div> <div class="lightbox-backdrop"></div>`;
    document.body.appendChild(lightbox);
    document.body.classList.add('no-scroll');
    const closeBtn = document.querySelector('.close-btn');
    const backdrop = document.querySelector('.lightbox-backdrop');
    closeBtn.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);

}
function closeLightbox() {
    const lightbox = document.querySelector('.lightbox-container');
    const backdrop = document.querySelector('.lightbox-backdrop');
    document.body.removeChild(lightbox.parentNode);
    document.body.classList.remove('no-scroll');
}

// Scroll reveal
ScrollReveal().reveal('h2', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease'
});

ScrollReveal().reveal('ul li', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease'
});

ScrollReveal().reveal('img', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease'
});

ScrollReveal().reveal('p', {
    delay: 700,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease'
});

ScrollReveal().reveal('.btn', {
    delay: 900,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease'
});