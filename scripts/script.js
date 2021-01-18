const buy_btn = document.querySelectorAll(".buy-tickets");
const menu_btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const scroll_up = document.querySelector(".scroll-up");
const sections = document.getElementsByTagName("section");

// buy_btn.addEventListener("click", ()=>{location.href="../tickets/tickets.html"});

menu_btn.addEventListener("click", (e) =>
{
    menu_btn.firstElementChild.classList.toggle("none");
    menu_btn.lastElementChild.classList.toggle("none");
    menu.classList.toggle("none");
})

menu.addEventListener("click", (e) => {
    if(!e.target.matches(".menu a")) return;
    menu_btn.firstElementChild.classList.toggle("none");
    menu_btn.lastElementChild.classList.toggle("none");
    menu.classList.toggle("none");
})