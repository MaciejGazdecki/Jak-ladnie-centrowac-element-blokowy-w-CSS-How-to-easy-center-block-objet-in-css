function showmenu() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".menu")
    burger.addEventListener('click', function () {
        nav.classList.toggle('on');
    });
}
showmenu();
function showArrow () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 180) {
            $('.arrow').removeClass('on')
        }
        else {
            $('.arrow').addClass('on')
        }
    });
}
showArrow();
function arrow () {
    $('.arrow').on('click', function () {
        $("html").animate({
            scrollTop: 0,
        })
    });
}
arrow();