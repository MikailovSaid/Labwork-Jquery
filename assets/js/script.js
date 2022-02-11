$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            let links = $("a");
            let navbar = $(".nav-bar-wrapper");
            navbar.css("background-color","white");
            links.css("color","black");
        }else{
            let links = $("a");
            let navbar = $(".nav-bar-wrapper");
            navbar.css("background-color","transparent");
            links.css("color","white");
        }
    })
})