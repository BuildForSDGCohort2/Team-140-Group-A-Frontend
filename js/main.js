// JQUERY
$(document).ready(function() {
    // alert("hello world!")


    // hero_img_slider
    $(".hero_img_slider").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1
            }
        }
    });
})




// VANILLA JS