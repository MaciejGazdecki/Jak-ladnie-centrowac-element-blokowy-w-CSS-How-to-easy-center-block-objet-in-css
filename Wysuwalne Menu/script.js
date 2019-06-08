const arrow = document.querySelector(".arrow");
const nav = document.querySelector(".navigation");
arrow.addEventListener('click', function () {
    arrow.classList.toggle("on");
    nav.classList.toggle("on");
});