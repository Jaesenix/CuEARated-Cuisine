
function getGenre() {
    var queryUrl = "https://api.spotify.com/v1/recommendations/available-genre-seeds";
    var APIKey = "BQBQ_BwmhkXng5B3cf_VBvdo_RIMemN3nUfphgOjaqEC8jrYjJCYYu4RIk37oaJ2Qeqs7G7rnZdP9vPR-V1a55lzmXBNJ2TpoTGnBoqygaJFVSXynI052zpj_8_hsD6qwN411FoI5pc6DtmXBiBYAw";


    // Initialize the SDK Library
    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = 'BQDMtdni1uGKxSzA3j9kyr-uLSJwyUt3LlXOdlj8RZPR6VWk7pzexQXcqpGYvGCsKFHF8zTvr-9GwY7hPNa8UEw2sWagOKxoac1eHlAFWn5XqyN0xzeb3Y_lNGjvwKfRWbYrjjYfRU5lN7L5e7TqgwxDJUKbUKE';
        const player = new Spotify.Player({
          name: 'Web Playback SDK Quick Start Player',
          getOAuthToken: cb => { cb(token); }
        });
      
        // Error handling
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });
      
        // Playback status updates
        player.addListener('player_state_changed', state => { console.log(state); });
      
        // Ready
        player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
        });
      
        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });
      
        // Connect to the player!
        player.connect();
      };
    }