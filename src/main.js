(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const burgerMenu = document.querySelector('.icon-burger-menu');
        const closeMenu = document.querySelector('.icon-close-burger-menu');
        const menu = document.querySelector('.mobile-menu');
        const headerButton = document.querySelector('.header-button');
        const navigationLinks = document.querySelectorAll('.navigation-link');
        const header = document.querySelector('.header');

        function onToggleMenu() {
            burgerMenu.classList.toggle('is-menu-open');
            menu.classList.toggle('is-menu-open');
            closeMenu.classList.toggle('is-menu-open');
            header.classList.toggle('is-menu-open');
        }

        function onCloseMenu() {
            burgerMenu.classList.remove('is-menu-open');
            menu.classList.remove('is-menu-open');
            closeMenu.classList.remove('is-menu-open');
            header.classList.remove('is-menu-open');
        }

        navigationLinks.forEach((link) => {
            link.addEventListener('click', onToggleMenu);
        });

        headerButton.addEventListener('click', onCloseMenu);
        burgerMenu.addEventListener('click', onToggleMenu);
        closeMenu.addEventListener('click', onToggleMenu);
    });
})();