// Mobile Navigation 
var mobileMenuToggle = document.getElementsByClassName("mobile-menu-toggle")[0];
mobileMenuToggle.onclick = function () {
    document.querySelector(".header-menu").classList.toggle('active');
}
// Sticky Menu
var menu = document.getElementsByClassName("header-container")[0];
if (window.pageYOffset >= 32) { // fix middle load page issue
    menu.classList.add('sticky');
}
var lastScroll = 0;
window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;
    if (currentScroll <= 32) {
        menu.classList.remove('sticky');
        return;
    } else {
        menu.classList.add('sticky');
    }
    lastScroll = currentScroll;
});