$(window).on("scroll touchmove", function () {
    $('.top-wrapper').toggleClass('show', $(document).scrollTop() > 190);

});