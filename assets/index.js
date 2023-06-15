menu_lines = document.querySelector(".menu_lines");
menu_lines.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    menuOpen = document.querySelector(".bx-menu");
    menuOpen.classList.toggle("active");
    menuClose = document.querySelector(".bx-x");
    menuClose.classList.toggle("active");
}