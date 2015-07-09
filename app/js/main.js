'use strict';
(function () {


    var app = {

        initialize: function () {
            this.setUpListeners();
            this.SkroLl();
        },
        setUpListeners: function () {


            $('.facilities_text li').on('click', function () {
                var $this = $(this);
                $('.facilities_text li').removeClass('active');
                $this.addClass('active');
            });
            $(".logo a[href*='#']").mPageScroll2id();
            //fix top menu
            $(window).bind('scroll', function () {
                if ($(window).scrollTop() > 62) {
                    $('nav').addClass('navbar-fixed-top');
                    $('#header .section_title').css("margin-top", "161px");
                } else {
                    $('nav').removeClass('navbar-fixed-top');
                }
            });

            //animate

            $(".facilities .section_title,.header .section_title").animated("fadeInUp", "fadeOutDown");

            $('#myTabs,#myTabs2 a,#myTabs3 a').click(function (e) {
                e.preventDefault();
                $(this).tab('show')
            });
            $(".section_img").animated("fadeInUp", "fadeOutDown");

            $(".animation_1").animated("flipInY", "fadeOutDown");
            $(".animation_2").animated("fadeInLeft", "fadeOutDown");
            $(".animation_3").animated("fadeInRight", "fadeOutDown");

            $(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
            $(".right .resume_item").animated("fadeInRight", "fadeOutDown");


            //    $('#stiky_el').waypoint(function (direction) {
            //        if (direction == 'down') {
            //
            //            $('#stiky_el').addClass('stiky');
            //        }
            //        else {
            //            $('#stiky_el').removeClass('stiky');
            //        }
            //    }, {offset: '150px'});
            //    $(".copiright").waypoint(function (direction) {
            //        if (direction == 'down') {
            //            $('#stiky_el').removeClass('stiky');
            //
            //        }
            //        else {
            //
            //            $('#stiky_el').addClass('stiky').fadeIn('slow');
            //        }
            //    }, {offset: '75%'});
            //    $(window).bind('scroll', function () {
            //        console.log($(window).scrollTop());
            //    });


        },
        SkroLl: function () {
            if ($(window).width() > 960) {
                var s = skrollr.init({
                    forceHeight: false
                });
            }

            // disable skrollr if the window is resized below 960px wide
            $(window).on('load resize', function () {
                if ($(window).width() <= 960||$(window).width()>1090 ) {
                    var s = skrollr.init().destroy(); // skrollr.init() returns the singleton created above
                }
            });
        }


    };
    app.initialize();


}());
