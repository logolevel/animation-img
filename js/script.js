function newOne() {

    var welcomeText = $(".first__welcome-text"),
        firstView = $(".first-view-enabled"),
        firstGeneral = $('.first__general'),
        headerBlock = $('.header');

    welcomeText.animate({opacity: "1"}, {duration: 1500}).delay(2000);
    welcomeText.animate({opacity: "0"}, {duration: 1500, complete:function() {
        welcomeText.css({"display": "none"}).delay(100);
        firstGeneral.css({"display" : "block"}).animate({opacity: "1"}, {duration: 1500, complete:function() {
            firstView.removeClass('first-view-enabled');
            headerBlock.animate({opacity: "1"}, {duration: 500});
        }})
        
    }});
    
}

setTimeout(newOne, 1000);