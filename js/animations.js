$(document).ready(() => {
    var $aboutLeft = $('.about-left');
    new Waypoint.Inview({
        element: $aboutLeft,
        enter: () => {
            $aboutLeft.addClass('slideInLeft');
        }
    });
    var $titleAbout = $('.title-about');
    new Waypoint.Inview({
        element: $titleAbout,
        enter: () => {
            $titleAbout.addClass('slideInLeft');
        }
    });
    var $aboutRight = $('.about-right');
    new Waypoint.Inview({
        element: $aboutRight,
        enter: () => {
            $aboutRight.addClass('slideInRight');
        }
    });
    var $card1 = $('.card1');
    new Waypoint.Inview({
        element: $card1,
        enter: () => {
            $card1.addClass('slideInLeft');
        }
    });
    var $card2 = $('.card2');
    new Waypoint.Inview({
        element: $card2,
        enter: () => {
            $card2.addClass('slideInLeft');
        }
    });

    var $card3 = $('.card3');
    new Waypoint.Inview({
        element: $card3,
        enter: () => {
            $card3.addClass('slideInRight');
        }
    });
    var bola1 = $('.bola1');
    new Waypoint.Inview({
        element: bola1,
        enter: () => {
            bola1.addClass('slideInLeft');
        }
    });
    var $bola2 = $('.bola2');
    new Waypoint.Inview({
        element: $bola2,
        enter: () => {
            $bola2.addClass('slideInLeft');
        }
    });
    var $bola3 = $('.bola3');
    new Waypoint.Inview({
        element: $bola3,
        enter: () => {
            $bola3.addClass('slideInRight');
        }
    });
    var bola4 = $('.bola4');
    new Waypoint.Inview({
        element: bola4,
        enter: () => {
            bola4.addClass('slideInRight');
        }
    });
    var $form = $('.form')
    new Waypoint.Inview({
        element: $form,
        enter: () => {
            $form.addClass('slideInLeft');
        }
    });
    var $contactRight = $('.contact-right')
    new Waypoint.Inview({
        element: $contactRight,
        enter: () => {
            $contactRight.addClass('slideInRight');
        }
    });
    new Waypoint.Inview({
        element: $('.mapa-icon'),
        enter: () => {
            $('.mapa-icon').addClass('slideInLeft');
        }
    });
    new Waypoint.Inview({
        element: $('.footer-left'),
        enter: () => {
            $('.footer-left').addClass('slideInLeft');
        }
    });
    new Waypoint.Inview({
        element: $('.footer-right'),
        enter: () => {
            $('.footer-right').addClass('slideInRight');
        }
    });

});
// $(window).scroll(() => {
//     checkAnimation('.about-left', 'slideInLeft');
//     checkAnimation('.title-about', 'slideInLeft');
//     checkAnimation('.about-right', 'slideInRight');
//     checkAnimation('.card1', 'slideInLeft');
//     checkAnimation('.card2', 'slideInLeft');
//     checkAnimation('.card3', 'slideInRight');
//
//     checkAnimation('.bola1', 'slideInLeft');
//     checkAnimation('.bola2', 'slideInLeft');
//     checkAnimation('.bola3', 'slideInRight');
//     checkAnimation('.bola4', 'slideInRight');
//
//     checkAnimation('.form', 'slideInLeft');
//     checkAnimation('.contact-right', 'slideInRight');
//     checkAnimation('.mapa-icon', 'slideInLeft');
//
//     checkAnimation('.footer-left', 'slideInLeft');
//     checkAnimation('.footer-right', 'slideInRight');
// });
