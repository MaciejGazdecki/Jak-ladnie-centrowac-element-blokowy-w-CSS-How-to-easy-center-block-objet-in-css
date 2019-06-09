function pageEfects() {
    function showmenu() {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".menu")
        burger.addEventListener('click', function () {
            nav.classList.toggle('on');
        });
    }
    showmenu();

    function showArrow() {
        //wersja jQuery
        // $(window).on("scroll", function () {
        //     if ($(window).scrollTop() > 180) {
        //         $('.arrow').removeClass('on')
        //     }
        //     else {
        //         $('.arrow').addClass('on')
        //     }
        // });
        //wersja js vanilla
        const arrow = document.querySelector(".arrow")
        document.addEventListener("scroll", function () {
            if (window.scrollY > 180) {
                arrow.classList.remove('on')
            } else {
                arrow.classList.add('on')
            }
        })
    }
    showArrow();

    function arrowScroll() {
        $('.arrow').on('click', function () {
            $("html").animate({
                scrollTop: 0,
            })
        });
    }
    arrowScroll();
}
pageEfects();