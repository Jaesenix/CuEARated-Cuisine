// Variables
var gifUrl = "http://api.giphy.com/v1/gifs/search?";
var APIKey = "YX5nJxh4MAa6JTcABrKTaj04LiiMnc4a";
var searchQuery = "";

// QueryUrl
var queryUrl = gifUrl + "q=" + searchQuery + "&api_key=" + APIKey + "&limit=5";

$(document).ready(function () {

    // Ajax function
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        $("giphyView").text(JSON.stringify(response));
        console.log(queryUrl);

        // Not sure if separate button will prompt gifs??
        $("button name").on("click", function () {
            var getGifs = response.length;
            for (var i = 0; i < response.length; i++) {
                var random = Math.floor(Math.random() * getGifs);
                getGifs = random + getGifs;
            }
        })
    });

});
