/**
 *  Timers and Animation: Bouncing ball using settimeout()
 *
 *  JavaScript + CSS = Animation
 *
 *  Alternative Animation Options
 *  - Aminmated GIFs/PNGs
 *  - CSS3
 *  - Scalar Vector Graphics
 *  - Canvas which you can draw on using JavaScript
 *  - Video
 *  - Plugins such as Flash or Silverlight
 *
 *  Timers
 *
 *  Two timers are provided in JavaScript
 *  - setTimeOut
 *  - setInterval
 */
var
	body = document.getElementsByTagName("body")[0],
	ball = document.getElementById("ball");
var
	bx = ball.offsetLeft, by = ball.offsetTop, 
	bw = ball.offsetWidth, bh = ball.offsetHeight,
	dx = 5, dy = 5,
	active = true;

/**
 * This method will move a ball in the window and detect whether it has reached the screen edge and reversed direction
 */
function AnimateBall() {

	bx += dx;
	by += dy;
	ball.style.left = bx + "px";
	ball.style.top = by + "px";
	
	if (bx + dx < 0 || bx + bw + dx > body.offsetWidth) dx = -dx;
	if (by + dy < 0 || by + bh + dy > body.offsetHeight) dy = -dy;

    // Call setTimout will call AnimateBall after 10 ms. setTimeOut only happens once.
	if (active) setTimeout(AnimateBall, 10);
}

// start animation after 1 second, setTimeout only called once
var st = setTimeout(AnimateBall, 1000);

// stop ball on click
ball.addEventListener( "click", function() {
    clearTimeout(st); active = false;
} );