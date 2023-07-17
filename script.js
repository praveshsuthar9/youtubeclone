const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const lc = document.querySelector(".large-container");


menu.addEventListener('click', () => {
    sidebar.classList.toggle("active");
    lc.classList.toggle("active");
})