'use strict';
(function () {

    var app = {

        initialize: function () {
            this.setUpListeners();
            this.SkroLl();
        },
        setUpListeners: function () {
            $(window).resize(this.windowHeight());

            //
            $.fn.animated = function(inEffect, outEffect) {
                $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
                    if (dir === "down") {
                        $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
                    } else {
                        $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
                    }
                }, {
                    offset: "85%"
                }).waypoint(function(dir) {
                    if (dir === "down") {
                        $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
                    } else {
                        $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
                    }
                }, {
                    offset: -"100%"
                });
            };
            //
            $('.facilities_text li').on('click', function () {
                var $this = $(this);
                $('.facilities_text li').removeClass('active');
                $this.addClass('active');
            });
            //$(".logoplace a[href*='#']").mPageScroll2id();
            //fix top menu
            $(window).bind('scroll', function () {
                if ($(window).scrollTop() > 70) {
                    $('nav').addClass('ftop');
                } else {
                    $('nav').removeClass('ftop');
                }
            });
            //ANIMATE

            $(".facilities .section_title,.header .section_title").animated("fadeInUp", "fadeOutDown");

            $('#myTabs,#myTabs2 a,#myTabs3 a').click(function (e) {
                e.preventDefault();
                $(this).tab('show')
            });
            $(".section_img").animated("fadeIn", "fadeOut");


            $(".animation_1").animated("flipInY", "fadeOutDown");
            $(".animation_2").animated("fadeInLeft", "fadeOutDown");
            $(".animation_3").animated("fadeInRight", "fadeOutDown")


            $('#stiky_el').waypoint(function (direction) {
                if (direction == 'down') {
                    $('#skrol_image').addClass('fix')
                }
                else {
                    $('#skrol_image').removeClass('fix')
                }
            }, {offset: '102px'});
        },
        windowHeight: function () {
            $(".main_head").css("height", $(window).height());
        },
        SkroLl: function () {
            $(window).on('load resize', function () {
                var iphoneScroll = $('.how_connect .nav-tabs '),
                    iphoneClass = $('.how_connect .tab-pane ');
                if ($(window).width() < 760) {
                    iphoneScroll.css('display', 'none');
                    iphoneClass.removeClass('tab-pane fade');
                }
                if ($(window).width() > 768) {
                    iphoneScroll.css('display', 'block');
                    iphoneClass.addClass('tab-pane fade');
                }
            });
        }




    };
    app.initialize();


}());
