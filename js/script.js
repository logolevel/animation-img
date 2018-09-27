function newOne() {

    var welcomeText = $(".first__welcome-text");
    var firstView = $(".first-view-enabled");
    var firstGeneral = $('.first__general');

    welcomeText.animate({"opacity": "1" }, 1500 ).delay(2000);
    welcomeText.animate({"opacity": "0" }, 1500, function() {
        welcomeText.css({"display": "none"});
    });

    function secondStep() {
        firstGeneral.css({"display" : "block"}).animate({"opacity": "1" }, 1500, function() {
            firstView.removeClass('first-view-enabled');
        });
    }


    setTimeout(secondStep, 4000);



}

setTimeout(newOne, 1000);