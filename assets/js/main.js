$(document).ready(function(){
    $(".mobile-menu").click(function(){
        $(".main-menu").css({
            "width" : "70%",
            "transition" : ".3s",
            "visibility" : "visible"
        });
    });
    $(".close-btn").click(function(){
        $(".main-menu").css({
            "width" : "0%",
            "visibility" : "hidden"
        });
    })

    //search icon
    $(".search-icon span i").click(function(){
        $(".search-box").fadeToggle();
    });

    //service
    $(".service li").click(function(){
        $(".service li").removeClass("service-active");
        $(this).addClass("service-active");

        $(".li-title").removeClass("title-white");
        $(this).children(".li-title").addClass("title-white");

        $(".li-title p").removeClass("active-dot");
        $(this).children().children(".li-title p").addClass("active-dot");

        $(".li-details").slideUp();
        $(this).children(".li-details").slideToggle();
        
    });


    //Recent Work Gallery
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        responsiveClass:true,
        autoplay:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            481:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    $('.play-btn').click(function () {
        var mediaVideo = $("video").get(0);
        if (mediaVideo.paused) {
            $(".play-btn").css("opacity",".1");
            mediaVideo.play();
            
        } else {
            mediaVideo.pause();
            $(".play-btn").css("opacity","1");
       }
     });

});



