let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// open menu when clicked
menu.onclick = () => {
    navbar.classList.toggle('open');
}

var mediaIs = window.matchMedia('(max-width: 901px)');
function handleMediaChange(e) {
    if (e.matches) {
        navbar.classList.remove('open');
    }
}

// addEventListener is not supported in Safari versions prior to 14
if (mediaIs.addEventListener) {
    mediaIs.addEventListener('change', handleMediaChange);
} else if (mediaIs.addListener) {
    mediaIs.addListener(handleMediaChange);
}

handleMediaChange(mediaIs);


let prevScrollPos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    let header = document.querySelector('header');

    if (prevScrollPos > currentScrollPos) {
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
    }
    prevScrollPos = currentScrollPos;
}
