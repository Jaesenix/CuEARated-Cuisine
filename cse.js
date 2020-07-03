// Setup Variables
// ===============================================================================
// Custom Search JSON API URL
var baseURL = "https://www.googleapis.com/customsearch/v1?";

// Three query parameters 
// API Key 
var apiKey = "AIzaSyAT819HAf4lPsNGn_oJhOTME0PCUd9qVnc";
// var apiKey = "AIzaSyCbZdi8fcqGYnY90iVEnarEYSiPtOCZx4E";
//Custom Search Engine ID
var cx = "003022703542860733389:vjuxq0illje";
// Search Query 
var searchQuery = "";


// Functions
// ===============================================================================
// Create event listener for when search button is iniated
$("#searchBtn").click(function () {
  event.preventDefault();
  let searchQuery = $("#searchQuery").val();
  // Query URL
  var queryURL = baseURL + "key=" + apiKey + "&cx=" + cx + "&q=" + searchQuery + "recipe";
  console.log(queryURL);
  // AJAX Function 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // Clear the search results div from previous run
    $("#queryResults").empty();
    // Add response bubble to html
    $("#cseDiv").removeClass("invisible");
    var randomQuery = response.items.length;
    // Randomly select an array for a response website
    var randomize = Math.floor(Math.random() * randomQuery) + 0;
    var item = response.items[randomize];
    console.log(item);
    // Create link to website array
    $("#queryResults").append("<a target='_blank' href='" + item.link + "'>" + item.htmlTitle + "</a><br>");
    // Condition for when the response website has an image
    if (item.pagemap.cse_thumbnail[0].src) {
      $("#queryResults").append("<br><img class='responseImg' src='" + item.pagemap.cse_thumbnail[0].src + "'>");
    };
    // Add text 
    $("#queryResults").append("<p class='font-weight-light'>Not feeling it? Search again!");
  })
});
