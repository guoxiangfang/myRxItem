
$(function(){
    navbarIphoneFun();
    window.onresize = function(){
        navbarIphoneFun();
    };
    //引入header和footer
    $("#headerPage").load("public/header.html");
    $("#footerPage").load("public/footer.html");

    // 设置滑动后，header的背景颜色
    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $('.navbar-sticky').addClass('sticky');
            $('.banber-box').addClass('banner-top');
        } else {
            $('.navbar-sticky').removeClass('sticky');
            $('.banber-box').removeClass('banner-top');
        }
    });

    // 产品简介 功能介绍 价格 tab切换
    $(".navbar-productMain ul li").on("click",function(){
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".productContent .productInfo").eq(index).show().siblings().hide();
    });
    //轮播图间隔时间
    $('#myCarousel').carousel({
        interval: 100
    });
});

function navbarIphoneFun() {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $(".navbar-productMain").addClass("navbar-iphone");
    } else {
        $(".navbar-productMain").removeClass("navbar-iphone");
    }
}

