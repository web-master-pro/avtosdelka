$(document).ready(function() {

    $('.js-slider').slick({
        infinite: true,
        speed: 600,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 4000,
        prevArrow: $(".js-slider-prev"),
        nextArrow: $(".js-slider-next")
    });

    $(".js-slider-prev, .js-slider-next")
        .mouseenter(function(){
            $(this).addClass("on");
        })
        .mouseleave(function(){
            $(this).removeClass("on");
        });

});
