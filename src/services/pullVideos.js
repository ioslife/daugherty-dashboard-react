let Vimeo = require("vimeo").Vimeo;

export function fetchVideos (callback) {
  let client = new Vimeo(
    "e956e972ca390e25943fc44472e9298635a4482b",
    "Yf7h1SmMUx9yGiNjBSv4xD9DS946xsnFSMTFZTQk9sXCJE9i+2R/GFg3UbHAS06MXfEhnMDZJ6heTBAUbf/4a4zLCaAky4oKMjW2bpn0uLMIimMhgak6n55aFjk8LQNg",
    "9d00b7af5e978de6b77bd813e1793c6a"
  );
  
  client.request(
    {
      method: "GET",
      path: "/me/albums/5828482/videos"
    },
    (error, body, status_code, headers) => {
      if (error) {
        console.log(error);
      }
      callback(body)
    }
  )
};
