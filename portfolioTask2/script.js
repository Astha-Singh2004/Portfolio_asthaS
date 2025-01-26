document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".icons");
    const menu = document.querySelector("nav ul");

    function toggleMenu() {
        menu.classList.toggle("active");
    }

    menuIcon.addEventListener("click", toggleMenu);
});
