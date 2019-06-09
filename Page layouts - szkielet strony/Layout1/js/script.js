function Showmenu() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".menu")
    burger.addEventListener('click', function () {
        nav.classList.toggle('on');
    });
}
Showmenu();
function arrow () {
    $('.arrow').on('click', function () {
        $("html").animate({
            scrollTop: 0,
        })
    });
}
arrow();