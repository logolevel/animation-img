function newOne() {

    var welcomeText = $(".first__welcome-text");
    var generalContent = $(".first__general");

    welcomeText.animate({"opacity": "1" }, 1500 ).delay(2000);
    welcomeText.animate({"opacity": "0" }, 1500, function() {
        welcomeText.css({"display": "none"});
    });





}

setTimeout(newOne, 1000);