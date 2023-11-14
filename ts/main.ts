const menu: HTMLElement | null = document.querySelector('#menu-icon');
const navbar: HTMLElement | null = document.querySelector('.navbar');

if (menu && navbar) {
    menu.onclick = () => {
        navbar.classList.toggle('open');
    }
}

const mediaIs: MediaQueryList = window.matchMedia('(max-width: 901px)');

function handleMediaChange(e: MediaQueryListEvent): void {
    if (e.matches && navbar) {
        navbar.classList.remove('open');
    }
}

if (mediaIs.addEventListener) {
    mediaIs.addEventListener('change', handleMediaChange);
} else if (mediaIs.addListener) {
    mediaIs.addListener(handleMediaChange);
}

handleMediaChange({matches: mediaIs.matches} as MediaQueryListEvent);


let prevScrollPos: number = window.scrollY;
window.onscroll = function() {
    let currentScrollPos: number = window.scrollY;
    let header: HTMLElement | null = document.querySelector('header');

    if (header) {
        if (prevScrollPos > currentScrollPos) {
            header.classList.remove('hidden');
        } else {
            header.classList.add('hidden');
        }
    }

    prevScrollPos = currentScrollPos;
}
