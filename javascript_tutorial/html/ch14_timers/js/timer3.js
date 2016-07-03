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
 *  requestAnimationFrame was introduced in HTML5 and some support in FireFox, Chrome, and Safari.
 *
 */
var
	body = document.getElementsByTagName("body")[0],
	ball = document.getElementById("ball");
var
	bx = ball.offsetLeft, by = ball.offsetTop, 
	bw = ball.offsetWidth, bh = ball.offsetHeight,
	dx = 5, dy = 5;

/**
 * This method will move a ball in the window and detect whether it has reached the screen edge and reversed direction.
 * requestAnimationFrame shim.
 */
if (!window.requestAnimationFrame) window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

// move ball	
function AnimateBall() {

    // requestAnimationFrame tells the browser to do an animation when it can.
    // It could work very fast on some browsers and very slow on others.
	window.requestAnimationFrame(AnimateBall);

	bx += dx;
	by += dy;
	ball.style.left = bx + "px";
	ball.style.top = by + "px";
	
	if (bx + dx < 0 || bx + bw + dx > body.offsetWidth) dx = -dx;
	if (by + dy < 0 || by + bh + dy > body.offsetHeight) dy = -dy;
}

// start animation
AnimateBall();