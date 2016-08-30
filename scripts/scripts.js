$(window).on("scroll touchmove", function () {
    $('.navigation-logo').toggleClass('tiny', $(document).scrollTop() > 20);
    $('.navigation').toggleClass('tiny', $(document).scrollTop() > 0);

});