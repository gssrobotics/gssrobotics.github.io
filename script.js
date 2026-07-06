function toggleMobileMenu() {
    const mobileHamburger = document.querySelector('.mobile-hamburger');
    const nav = document.querySelector('.nav').querySelectorAll('li:not(.mobile-hamburger)');
    const logo = document.querySelector('.logo-link');
    for(const navItem of nav) {
        navItem.classList.toggle('visible');
    }
    logo.classList.toggle('visible');
}