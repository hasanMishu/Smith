
$('.num-count').counterUp({
    delay:10,
    time:5000
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// function sticky() {
//     if (window.scrollY >= navTop) {
//         document.body.classList.add('sticky');
//     } else {
//         document.body.classList.remove('sticky');
//     }
// }








$('.port-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-double-right next"></i>',

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

//  const win =$(window);
//  const html_body = $('html,body');
//  const stk =$('.st-menu');
//  const b2b =$('.back-to-top i');
//  const c_stk = 'sticky';
//  const bdy = $('body');
//
//  win.scroll(
//      function() {}
//  )
//
//
// win.scroll(() => win.scrollTop() > 100 ? b2b.fadeIn() + b2b.addClass('animate__animated animate__flip animate__slower 2s') : b2b.fadeOut());
// //back to top effect//
// b2b.click(() => html_body.animate({scrollTop: 0}, 2500));


$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});