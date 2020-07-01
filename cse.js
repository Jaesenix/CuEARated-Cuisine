// Setup Variables
// ===============================================================================
// Custom Search JSON API URL
var baseURL = "https://www.googleapis.com/customsearch/v1?";

// Three query parameters 
// API Key 
var apiKey = "AIzaSyCbZdi8fcqGYnY90iVEnarEYSiPtOCZx4E";
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
  var queryURL = baseURL + "key=" + apiKey + "&cx=" + cx + "&q=" + searchQuery;
  console.log(queryURL);
  // AJAX Function 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  })
});
  








// const myInitCallback = function() {
//   if (document.readyState == 'complete') {
//     // Document is ready when CSE element is initialized.
//     // Render an element with both search box and search results in div with id 'test'.
//     google.search.cse.element.render(
//         {
//           div: "test",
//           tag: 'search'
//          });
//   } else {
//     // Document is not ready yet, when CSE element is initialized.
//     google.setOnLoadCallback(function() {
//        // Render an element with both search box and search results in div with id 'test'.
//         google.search.cse.element.render(
//             {
//               div: "test",
//               tag: 'search'
//             });
//     }, true);
//   }
// };

// // Insert it before the CSE code snippet so the global properties like parsetags and callback
// // are available when cse.js runs.
// window.__gcse = {
//   parsetags: 'explicit',
//   initializationCallback: myInitCallback
// };

// Main Processes
// ===============================================================================
