(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const burgerMenu = document.querySelector('.icon-burger-menu');
        const closeMenu = document.querySelector('.icon-close-burger-menu');
        const menu = document.querySelector('.mobile-menu');

        function onToggleMenu() {
            burgerMenu.classList.toggle('is-open');
            menu.classList.toggle('is-open');
            closeMenu.classList.toggle('is-open');
            document.body.classList.toggle('body-no-scroll');
        }

        burgerMenu.addEventListener('click', onToggleMenu);
        closeMenu.addEventListener('click', onToggleMenu);
    });
})();