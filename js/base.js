$(function() {
    /*to top*/
    var ws = $(window).scrollTop();
    var onePage = $(window).height();
    $(window).scroll(function() {
        var ws = $(window).scrollTop();
        var top = $(".to_top");
        ws > onePage ? 'ws>' + onePage + ',' + top.fadeIn().css("display", "block") : top.fadeOut();
    })
    var $top = parseInt($(window).scrollTop() / $(window).height()) + 1;
    $(".to_top").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500 * $top)
    })

    var nav = $(".aside_nav");
    var navHeight = $(".aside_nav").height();
    var screen_w = screen.width;
    var screen_h = $(window).height();
    var scrollTop = $(window).scrollTop();
    navbot()
    if (screen_w > 200) { nav.show(); }
    $(window).scroll(function() {
        navbot()
    });
    function navbot(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > screen_h) {
            nav.stop().animate({ top: scrollTop + screen_h - navHeight - 102 });
        } else {
            nav.stop().animate({ top: scrollTop + screen_h - navHeight -50 });
        }
    }

    //修复低版本浏览器placeholder
    $('input, textarea').placeholder();
})
