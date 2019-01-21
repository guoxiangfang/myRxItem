$(function(){
    navbarIphoneFun();
    window.onresize = function(){
        navbarIphoneFun();
    };
    $(".navbar-productMain ul li").on("click",function(){
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".productContent .productInfo").eq(index).show().siblings().hide();
    });
    $('#myCarousel').carousel({
        interval: 3000
    });
});

function navbarIphoneFun() {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $(".navbar-productMain").addClass("navbar-iphone");
    } else {
        $(".navbar-productMain").removeClass("navbar-iphone");
    }
}