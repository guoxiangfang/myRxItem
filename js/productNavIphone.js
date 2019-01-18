$(function(){
    navbarIphoneFun();
    window.onresize = function(){
        navbarIphoneFun();
    }
})
function navbarIphoneFun() {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $(".navbar-productMain").addClass("navbar-iphone");
    } else {
        $(".navbar-productMain").removeClass("navbar-iphone");
    }
}