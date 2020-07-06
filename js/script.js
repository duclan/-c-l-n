$(function() {
    $(".top-page").click(function() {
        $(".parallax-wrapper").animate({
            scrollTop: 0
        }, 500);
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    $("#toggle").click(function() {
        const headerGNav = document.querySelector(".gNav_wrapper");
        const isActiveMenu = $("#toggle").hasClass("on");
        
        var newItem01 = `<li class="menu_item add-new-item">
            <a href="" class="menu_link">お問い合わせ</a>
        </li>`;
        if (isActiveMenu) {
            $("#toggle").removeClass("on");
            $(".gNav_wrapper .add-new-item").remove();
            headerGNav && headerGNav.classList.remove("is-open");
        } else {
            $("#toggle").addClass("on");
            $(".gNav_wrapper .menu_list").append(newItem01);
            headerGNav && headerGNav.classList.add("is-open");
        }
    });

    $(window).resize(function() {
        var headerGNav = document.querySelector(".gNav_wrapper");
        var windowWidth = window && $(window).width();
        var SP_BREAKPOINT = 767;

        if(windowWidth && windowWidth > SP_BREAKPOINT) {
            $("#toggle").removeClass("on");
            $(".gNav_wrapper .add-new-item").remove();
            headerGNav && headerGNav.classList.remove("is-open");
        }
    });
    $(document).ready(function() {
        $('.parallax-wrapper').scroll(function(){
            var windowHeight = window.innerHeight;
            var scrollHeight = $(this).scrollTop();
            
            if (scrollHeight >= windowHeight - 80 ) {
                $('.top-page').show();
            } else {
                $('.top-page').hide();
            }
        });

        $(window).scroll(function(){
            var windowHeight = window.innerHeight;
            var scrollHeight = $(this).scrollTop();
            if (scrollHeight >= windowHeight) {
                $('.top-page').show();
            } else {
                $('.top-page').hide();
            }
        });

        var platform = new MobileDetect(window.navigator.userAgent);
        if( platform.is('iPhone') ) {
            $('.background').css("transform", "inherit");
            $('.background .banner-ttl-wrapper').addClass("banner-ttl-wrapper-ios");
            $('.background .banner-scroll').addClass("banner-scroll-ios");
        }
    });
});

$(function(){
    function animation(){
        $('.fadeInUp').each(function(){
        var target = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > target - windowHeight){
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
        }
        });
    }
    animation();
    $('.parallax-wrapper').scroll(function (){
        animation();
    });
});
