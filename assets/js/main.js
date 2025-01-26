document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".site-nav");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
