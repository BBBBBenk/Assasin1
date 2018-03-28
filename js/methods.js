var imgList = ["bg1.jpg", "bg2.jpg"];

var methods = {
    initBgDiv: function() {
        var divHeight = document.body.clientHeight;
        var divWidth = document.body.clientWidth;
        $(".bgChange").find("div").height(divHeight).width(divWidth);
    },
    changeBg: function() {
        $(".bgChange div").fadeOut(0).eq(0).fadeIn(0);
        var i = 0;
        setInterval(function() {
            if ($(".bgChange div").length > (i + 1)) {
                $(".bgChange div").eq(i).fadeOut(3000).next("div").fadeIn(2000);
                i++;
            } else {
                $(".bgChange div").eq(i).fadeOut(3000).siblings("div").eq(0).fadeIn(2000);
                i = 0;
            }
        }, 10000);
    }
}

$(document).ready(function() {
    methods.initBgDiv();
    methods.changeBg();
});

window.onresize = function() {
    methods.initBgDiv();
}