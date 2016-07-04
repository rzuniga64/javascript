/**
 *  Video
 */

var
    video = document.getElementById("bunny"),
    play = document.getElementById("play"),
    timer = document.getElementById("timer"),
    update;

video.addEventListener("click", PlayVideo, false);
play.addEventListener("click", PlayVideo, false);

/**
 * Play or pause video. Set a timer to display the percentage of vidoe played. 
 */
function PlayVideo(event) {

    event.preventDefault();

    if (video.paused) {

        video.play();
        play.textContent = "Pause";

        update = setInterval( function() {
            timer.textContent = Math.round(video.currentTime / video.duration * 100) + "%"; // inline function
        }, 500);
    }
    else {
        video.pause();
        play.textContent = "Play";

        if (update) clearInterval(update);
    }
}