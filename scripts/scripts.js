$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('sticky');
        $('.logo').addClass('logo-sticky');
    } else {
        $('.navbar').removeClass('sticky');
        $('.logo').removeClass('logo-sticky');
    }
});