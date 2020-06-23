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
})