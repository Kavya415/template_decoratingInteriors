/**
 * Created by Kavya Sree.
 */

$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 550) {
            $('#nav_bar').addClass('navbar-fixed');
            $('#nav_bar').css("background-color", "black");
            $('.nav_links li a').css("color", "white");
            $('.navbar-default .navbar-nav>.active>a').css({"color": "#dfcd50", "background-color":"transparent"});
            $('.collapse').css("background-color", "black");
            $('.navbar-brand').css({"color": "white", "border":"2px solid white", "background-color":"rgba(255,255,255,0.2)"});
        }
        if ($(window).scrollTop() < 551) {
            $('#nav_bar').removeClass('navbar-fixed');
            $('#nav_bar').css("background-color", "#e1c37d");
            $('.nav_links li a').css("color", "black");
            $('.navbar-default .navbar-nav>.active>a').css("background-color", "#e1c37d");
            $('.collapse').css("background-color", "#e1c37d");
            $('.navbar-brand').css({"color": "black", "border":"2px solid black", "background-color":"rgba(0,0,0,0.2)"});
        }
    });
});


$('a.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 80
            }, 900);
            return false;
        }
    }
});


$('body').scrollspy({
    target: '.navbar-default',
    offset: 80
});



$(".navbar-nav li a").click(function (event) {
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
        $(".navbar-collapse").collapse('hide');
    }
});

new WOW().init();




//Services Section
$(document).ready(function() {

    var animationName1 = 'animated fadeInRight';
    animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.res-tab').addClass(animationName1).css('animation-delay','1s');
    $('.off-tab').addClass(animationName1).css('animation-delay','1.5s');
    $('.com-tab').addClass(animationName1).css('animation-delay','2s').one(animationend,function() {
        $('.res-tab').removeClass(animationName1);
        $('.off-tab').removeClass(animationName1);
        $('.com-tab').removeClass(animationName1);
    });
});



$(document).ready(function() {

    var animationName2 = 'animated zoomOutRight';
    var animationName3 = 'animated flipOutX';
    var animationName4 = 'animated flipInX';
    var animationName5 = 'animated zoomInRight';

    $('#res-button').click(function() {
        $('.res-tab').css({'border':'2px solid rgba(255,255,255,0.5)', 'box-shadow':'0 10px 20px -5px rgba(0, 0, 0, 0.75)'});

        $('.com-tab').css('animation-delay','1s').addClass(animationName2).one(animationend,function() {
            $('.com-tab').addClass('hidden');
            $(this).removeClass(animationName2);
        });

        $('.off-tab').css('animation-delay','1.5s').addClass(animationName2).one(animationend,function() {
            $('.off-tab').addClass('hidden');
            $(this).removeClass(animationName2);
        });

        $('.res-tab').css('animation-delay','2s').addClass(animationName3).one(animationend,function() {
            $('.res-tab, .services-content').addClass('hidden');
            $(this).removeClass(animationName3);
        });

        $('.res-content').css({'animation-delay':'2.6s','opacity':'1','display':'block'}).removeClass('hidden').addClass(animationName4).one(animationend,function() {
            $(this).removeClass(animationName4);
        });

    });


    $('#res-close').click(function() {
        $('.res-content').css('animation-delay','0.6s').addClass(animationName3).one(animationend,function() {
            $('.res-content').addClass('hidden');
            $(this).removeClass(animationName3);
            $('.services-content').css('animation-delay','1s').removeClass('hidden').addClass('shown');
        });

        $('.res-tab').css('animation-delay','0.3s').removeClass('hidden').addClass(animationName4).one(animationend,function() {
            $('.services-content').removeClass('hidden');
            $('.res-tab').removeClass(animationName4);
        });

        $('.off-tab').css('animation-delay','1s').removeClass('hidden').addClass(animationName5).one(animationend,function() {
            $('.off-tab').removeClass('hidden');
            $(this).removeClass(animationName5);
        });

        $('.com-tab').css('animation-delay','1.5s').removeClass('hidden').addClass(animationName5).one(animationend,function() {
            $('.com-tab').removeClass('hidden');
            $(this).removeClass(animationName5);
        }).one(animationend,function() {
            $('.res-tab').hover( function(){
                    $(this).css({'border':'2px solid rgba(255,255,255,0.5)', 'box-shadow':'0 10px 20px -5px rgba(0, 0, 0, 0.75)'});
                },
                function(){
                    $(this).css({'border':'none', 'box-shadow':'none'});
                });
        });



    });



    $('#off-button').click(function() {
        $('.off-tab').css({'border':'2px solid rgba(255,255,255,0.5)', 'box-shadow':'0 10px 20px -5px rgba(0, 0, 0, 0.75)'});

        $('.res-tab').css('animation-delay','1s').addClass(animationName2).one(animationend,function() {
            $('.res-tab').addClass('hidden');
            $(this).removeClass(animationName2);
        });

        $('.com-tab').css('animation-delay','1.5s').addClass(animationName2).one(animationend,function() {
            $('.com-tab').addClass('hidden');
            $(this).removeClass(animationName2);
        });

        $('.off-tab').css('animation-delay','2s').addClass(animationName3).one(animationend,function() {
            $('.off-tab, .services-content').addClass('hidden');
            $(this).removeClass(animationName3);
        });

        $('.off-content').css({'animation-delay':'2.6s','opacity':'1','display':'block'}).removeClass('hidden').addClass(animationName4).one(animationend,function() {
            $(this).removeClass(animationName4);
        });

    });


    $('#off-close').click(function() {
        $('.off-content').css('animation-delay','0.6s').addClass(animationName3).one(animationend,function() {
            $('.off-content').addClass('hidden');
            $(this).removeClass(animationName3);
            $('.services-content').css('animation-delay','1s').removeClass('hidden').addClass('shown');
        });

        $('.off-tab').css('animation-delay','1.5s').removeClass('hidden').addClass(animationName4).one(animationend,function() {
            $('.services-content').removeClass('hidden');
            $('.off-tab').removeClass(animationName4);
        });

        $('.res-tab').css('animation-delay','0.5s').removeClass('hidden').addClass(animationName5).one(animationend,function() {
            $('.off-tab').removeClass('hidden');
            $(this).removeClass(animationName5);
        });

        $('.com-tab').css('animation-delay','2s').removeClass('hidden').addClass(animationName5).one(animationend,function() {
            $('.com-tab').removeClass('hidden');
            $(this).removeClass(animationName5);
        }).one(animationend,function() {
            $('.off-tab').hover( function(){
                    $(this).css({'border':'2px solid rgba(255,255,255,0.5)', 'box-shadow':'0 10px 20px -5px rgba(0, 0, 0, 0.75)'});
                },
                function(){
                    $(this).css({'border':'none', 'box-shadow':'none'});
                });
        });

    });




    $('#com-button').click(function() {
        $('.com-tab').css({'border':'2px solid rgba(255,255,255,0.5)', 'box-shadow':'0 10px 20px -5px rgba(0, 0, 0, 0.75)'});

        $('.res-tab').css('animation-delay','1s').addClass(animationName2).one(animationend,function() {
            $('.res-tab').addClass('hidden');
            $(this).removeClass(animationName2);
        });

        $('.off-tab').css('animation-delay','1.5s').addClass(animationName2).one(animationend,function() {
            $('.off-tab').addClass('hidden');
            $(this).removeClass(animationName2);
        });

        $('.com-tab').css('animation-delay','2s').addClass(animationName3).one(animationend,function() {
            $('.com-tab, .services-content').addClass('hidden');
            $(this).removeClass(animationName3);
        });

        $('.com-content').css({'animation-delay':'2.6s','opacity':'1','display':'block'}).removeClass('hidden').addClass(animationName4).one(animationend,function() {
            $(this).removeClass(animationName4);
        });

    });

    $('#com-close').click(function() {
        $('.com-content').css('animation-delay','0.6s').addClass(animationName3).one(animationend,function() {
            $('.com-content').addClass('hidden');
            $(this).removeClass(animationName3);
            $('.services-content').css('animation-delay','1s').removeClass('hidden').addClass('shown');
        });

        $('.com-tab').css('animation-delay','2s').removeClass('hidden').addClass(animationName4).one(animationend,function() {
            $('.services-content').removeClass('hidden');
            $('.com-tab').removeClass(animationName4);
        });

        $('.res-tab').css('animation-delay','0.5s').removeClass('hidden').addClass(animationName5).one(animationend,function() {
            $('.off-tab').removeClass('hidden');
            $(this).removeClass(animationName5);
        });

        $('.off-tab').css('animation-delay','1.2s').removeClass('hidden').addClass(animationName5).one(animationend,function() {
            $('.com-tab').removeClass('hidden');
            $(this).removeClass(animationName5);
        }).one(animationend,function() {
            $('.com-tab').hover( function(){
                    $(this).css({'border':'2px solid rgba(255,255,255,0.5)', 'box-shadow':'0 10px 20px -5px rgba(0, 0, 0, 0.75)'});
                },
                function(){
                    $(this).css({'border':'none', 'box-shadow':'none'});
                });
        });

    });



});




//Portfolio Section
(function() {
    var support = { transitions: Modernizr.csstransitions },
        // transition end event name
        transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        onEndTransition = function( el, callback ) {
            var onEndCallbackFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.target != this ) return;
                    this.removeEventListener( transEndEventName, onEndCallbackFn );
                }
                if( callback && typeof callback === 'function' ) { callback.call(this); }
            };
            if( support.transitions ) {
                el.addEventListener( transEndEventName, onEndCallbackFn );
            }
            else {
                onEndCallbackFn();
            }
        };

    new GridFx(document.querySelector('.grid'), {
        imgPosition : {
            x : -0.5,
            y : 1
        },
        onOpenItem : function(instance, item) {
            instance.items.forEach(function(el) {
                if(item != el) {
                    var delay = Math.floor(Math.random() * 50);
                    el.style.WebkitTransition = 'opacity .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1), -webkit-transform .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
                    el.style.transition = 'opacity .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1), transform .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
                    el.style.WebkitTransform = 'scale3d(0.1,0.1,1)';
                    el.style.transform = 'scale3d(0.1,0.1,1)';
                    el.style.opacity = 0;
                }
            });
        },
        onCloseItem : function(instance, item) {
            instance.items.forEach(function(el) {
                if(item != el) {
                    el.style.WebkitTransition = 'opacity .4s, -webkit-transform .4s';
                    el.style.transition = 'opacity .4s, transform .4s';
                    el.style.WebkitTransform = 'scale3d(1,1,1)';
                    el.style.transform = 'scale3d(1,1,1)';
                    el.style.opacity = 1;

                    onEndTransition(el, function() {
                        el.style.transition = 'none';
                        el.style.WebkitTransform = 'none';
                    });
                }
            });
        }
    });
})();





//Free Quote Section
var  $body = $('body'),
    $panel = $('.panel'),
    $img = $('.panel__img-col');

function initTilt() {
    TweenMax.set([$img], { transformStyle: "preserve-3d" });

    $body.mousemove(function(e) {
        var sxPos = e.pageX / $panel.width() * 100 - 100;
        var syPos = e.pageY / $panel.height() * 100 - 100;

        TweenMax.to($img, 2, {
            rotationY: 0.03 * sxPos,
            rotationX: -0.03 * syPos,
            transformPerspective: 500,
            transformOrigin: "center center -200",
            ease: Expo.easeOut
        });
    });
};

initTilt();

console.clear();


//Isotope Plugin
$(window).load(function() {
    var $container = $('.grid');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.categories a').click(function() {
        $('.categories .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

});



//Testimonials Slider
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        margin:10,
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});

