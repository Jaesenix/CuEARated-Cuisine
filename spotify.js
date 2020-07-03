// Setup Variables
// ===============================================================================
cookingPlaylistArray = [
    // Feel Good Dinner
    "https://open.spotify.com/embed/playlist/37i9dQZF1DXbm6HfkbMtFZ",
    // Chill Dinner 
    "https://open.spotify.com/embed/playlist/37i9dQZF1DXb83YJL7gTWj", 
    // Jazzy Dinner
    "https://open.spotify.com/embed/playlist/37i9dQZF1DWTALrdBtcXjw",
    // Country Cookout
    "https://open.spotify.com/embed/playlist/37i9dQZF1DXbIbVYph0Zr5",
    // The Cook(in)
    "https://open.spotify.com/embed/playlist/37i9dQZF1DXab8DipvnuNU",
    // Kitchen Swagger
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX2FsCLsHeMrM", 
    // Dinner Music
    "https://open.spotify.com/embed/playlist/37i9dQZF1DXatMjChPKgBk" 
];

// Functions
// ===============================================================================
// Create event listener for when "feeling lucky" button is iniated
$("#feelingLuckyBtn").click(function () {
    event.preventDefault();
    // Clear the search results div from previous run
    $("#spotifyPlayer").empty();
    // Randomly select a playlist from cookingPlaylistArray 
    randomQuery = cookingPlaylistArray.length;
    var randomize = Math.floor(Math.random() * randomQuery) + 0;
    var item = cookingPlaylistArray[randomize];
    console.log(item);
    // Add item to spotifyPlayer div
    $("#spotifyPlayer").append("<iframe src='" + item +"' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media' id='spotifyPlayer'>");
});
