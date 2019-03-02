"use strict";
jQuery(document).ready(function ($) {


    //==========================================
    //for Preloader
    //=========================================

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });


    //==========================================
    // Mobile menu
    //=========================================
    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    //==========================================
    // wow
    //=========================================

    var wow = new WOW({
        mobile: false 
    });
    wow.init();


// =========================================
// magnificPopup
// =========================================

    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.video-link').magnificPopup({
        type: 'iframe'
    });


// =========================================
//      featured slider
// =========================================       


    $('.featured_slider').slick({
        centerMode: true,
        dote: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 1500,
        index: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });



// =========================================
// Counter
// =========================================   

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });



// =========================================
// Scroll Up
// =========================================   

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });


// =========================================
// About us accordion 
// =========================================   

    $("#faq_main_content").collapse({
        accordion: true,
        open: function () {
            this.addClass("open");
            this.css({height: this.children().outerHeight()});
        },
        close: function () {
            this.css({height: "0px"});
            this.removeClass("open");
        }
    });

// =========================================
// Team Skillbar active js
// =========================================   


    jQuery('.teamskillbar').each(function () {
        jQuery(this).find('.teamskillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });




    //End

});


// =========================================
//  Portfolio Isotop
// =========================================   

$(function () {
    // Initialize Isotope
    var $notes = $(".grid").isotope({
        itemSelector: ".grid-item"
    });

    // On filter button click
    $(".filters-button-group .button").on("click", function (e) {
        var $this = $(this);

        // Prevent default behaviour
        e.preventDefault();

        // Toggle the active class on the correct button
        $(".filters-button-group .button").removeClass("is-checked");
        $this.addClass("is-checked");

        // Get the filter data attribute from the button
        $notes.isotope({
            filter: $this.attr("data-filter")
        });

    });
});


(function($) {
  'use strict';

  var Hero = {
    getDebounce: function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },

    getSlick: function($method) {
      $('[data-init="slick"]').each(function () {
        var el = $(this);

        var breakpointsWidth = { tn: 319, xs: 479, ss: 519, sm: 767, md: 991, lg: 1199 };

        var slickDefault = {
          dots: true,
          arrows: false,

          fade: true,
          infinite: true,
          autoplay: true,
          pauseOnHover: true,
          speed: 1000,
          adaptiveHeight: true,

          slidesToShow: 1,
          slidesToScroll: 1,

          mobileFirst: true
        };

        // Merge settings.
        var settings = $.extend(slickDefault, el.data());
        delete settings.init;

        // Build breakpoints.
        if (settings.breakpoints) {
          var _responsive = [];
          var _breakpoints = settings.breakpoints;

          var buildBreakpoints = function buildBreakpoints(key, show, scroll) {
            if (show !== 0) {
              if (breakpointsWidth[key] != 991 && breakpointsWidth[key] != 1199) {
                _responsive.push({
                  breakpoint: breakpointsWidth[key],
                  settings: {
                    slidesToShow: parseInt(show),
                    slidesToScroll: 1
                  }
                });
              } else {
                _responsive.push({
                  breakpoint: breakpointsWidth[key],
                  settings: {
                    slidesToShow: parseInt(show),
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                  }
                });
              }
            };
          };

          if ((typeof _breakpoints === 'undefined' ? 'undefined' : _typeof(_breakpoints)) === "object") {
            $.each(_breakpoints, buildBreakpoints);
          }

          delete settings.breakpoints;
          settings.responsive = _responsive;
        };

        if ($method != 'unslick') el.slick(settings);else el.slick($method);
      });
    },

    getYoutubePlayer: function() {
      $('[data-video="youtube"]').each(function() {
        $(this).YTPlayer({
          showControls: false
        });
      });
    },

    getVimeoPlayer: function() {
      $('[data-video="vimeo"]').each(function() {
        $(this).vimeo_player({
          showControls: false
        });
      });
    },

    init: function() {
      var self = this;

      // Call functions use debounce resize function
      var resizeDebounce = self.getDebounce(function() {
      }, 250);

      self.getSlick();
      self.getYoutubePlayer();
      self.getVimeoPlayer();

      window.addEventListener('resize', resizeDebounce);
    }
  };

  $(document).ready(function() {
    Hero.init();
  });

})(jQuery);













