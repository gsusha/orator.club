// Load the IFrame Player API code asynchronously.
  let tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubePlayerAPIReady() {
  let player;
  player = new YT.Player('video', {
    videoId: 'u3bEGDSb4Cs', // YouTube Video ID
    width: 1440,               // Player width (in px)
    height: 500,              // Player height (in px)
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      controls: 0,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 0,  // Hide the Youtube Logo
      loop: 1,            // Run the video in a loop
      fs: 0,              // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 0,  // Hide the Video Annotations
      autohide: 0         // Hide video controls when playing
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
}