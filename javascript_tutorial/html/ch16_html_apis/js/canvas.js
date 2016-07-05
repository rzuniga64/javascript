/**
 *  Canvas is a programmable image. You place a canvas image on the page and issue drawing commands in JavaScript.
 *  Canvas renders as a bitmap so once you've drawn something, such as a line, you can't change its start or end points.
 *  So what you need to do is clear the canvas and redraw it again.
 *
 *  The biggest advantage of Canvas is that it is extremely fast. Many develops use it to develop HTML5 games.
 *  Canvas elements are still part of the DOM.
 */

var canvas = document.getElementById("mycanvas");

/**
 * Canvas drawing.
 */
if (canvas.getContext) {

    var cxt = canvas.getContext("2d");

    // define default styles
    cxt.lineWidth = 6;
    cxt.strokeStyle = "#333";   // dark gray
    cxt.fillStyle = "#ccc";     // light grey

    // lines
    cxt.beginPath();
    cxt.moveTo(0,0);
    cxt.lineTo(150,150);
    cxt.lineTo(100,200);
    cxt.bezierCurveTo(300,150,0,0,200,300); // an endpoinrt and two control points
    cxt.stroke();

    // clear top-left square
    cxt.clearRect(0,0,50,50);

    // circle
    cxt.beginPath();
    cxt.arc(200,80,50,0,Math.PI*2); // centerpoint, the radius, the starting radian, and the ending radian
    cxt.fill();
    cxt.stroke();
}