// Variables
var gifUrl = "https://api.giphy.com/v1/gifs/search?";
var APIKey = "YX5nJxh4MAa6JTcABrKTaj04LiiMnc4a";
var queryUrl = gifUrl + "q=" + chef + "&api_key=" + APIKey + "&limit=10";
var chef = "";
var gordonRamsey = "gordonramsey";
var inaGarten = "inagarten";
var guyFieri = "guyfieri";
var padmaLakshmi = "padmalakshmi";

// Gordon Ramsey Button
$("#gordonramsey").click(function () {
    event.preventDefault();
    let chef = "gordonramsey";
    var queryUrl = gifUrl + "q=" + chef + "&api_key=" + APIKey + "&limit=10";
    console.log(queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#giphyDiv").empty();
        for (var i = 0; i < 3; i++) {
            var item = response.data[i].images.fixed_height.url;
            $("#giphyDiv").append("<img src='" + item + "'>");
        }

    });
});
// Ina Garten Button
$("#inagarten").click(function () {
    event.preventDefault();
    let chef = "inagarten";
    var queryUrl = gifUrl + "q=" + chef + "&api_key=" + APIKey + "&limit=10";
    console.log(queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#giphyDiv").empty();
        for (var i = 0; i < 3; i++) {
            var item = response.data[i].images.fixed_height.url;
            $("#giphyDiv").append("<img src='" + item + "'>");
        }

    });
});
// Guy Fieri Button
$("#guyfieri").click(function () {
    event.preventDefault();
    let chef = "guyfieri";
    var queryUrl = gifUrl + "q=" + chef + "&api_key=" + APIKey + "&limit=10";
    console.log(queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#giphyDiv").empty();
        // Gif1
        var item = response.data[0].images.fixed_height.url;
        $("#giphyDiv").append("<img src='" + item + "'>");
        // Gif2
        var item = response.data[2].images.fixed_height.url;
        $("#giphyDiv").append("<img src='" + item + "'>");
        // Gif3
        var item = response.data[3].images.fixed_height.url;
        $("#giphyDiv").append("<img src='" + item + "'>");
    });
});
// Padma Lakshmi Button
$("#padmalakshmi").click(function () {
    event.preventDefault();
    let chef = "padmalakshmi";
    var queryUrl = gifUrl + "q=" + chef + "&api_key=" + APIKey + "&limit=10";
    console.log(queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#giphyDiv").empty();
        for (var i = 0; i < 3; i++) {
            var item = response.data[i].images.fixed_height.url;
            $("#giphyDiv").append("<img src='" + item + "'>");
        }

    });
});
