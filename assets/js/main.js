$(document).ready(function () {
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-btn").addClass('active');
        } else {
            $(".scroll-top-btn").removeClass('active');
        }
    });
    //scroll to top button
    $(".scroll-top-btn").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    }); 
    $("[data-fancybox]").fancybox({
        selector: '[data-fancybox="images"]',
        loop: true
    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.navbar-nav').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });
    //owl header screen 
    $('.owl-ticket').owlCarousel({
        center: true,
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: false,
        autoplay: false,
        touchDrag  :true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});