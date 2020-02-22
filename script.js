/**
*
* Copyright (c) 2020 Adriano Bezerra 
*
**/
$('.message a').click(function() {

    $('form').animate({
        height : "toggle",
        opacity : "toggle"
    }, "slow");
});