/* *******************************************
This file will contain functions for making basic shapes
********************************************** */

// You MUST set up the canvas element to be referenced by JavaScript:
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// Here is your first function -- a circle
// circle vars: start x, start y, radius, color, stroke, strokecolor
function drawCircle(x,y,r,color,stroke,strokecolor) {
	context.beginPath();
	context.arc(x, y, r, 0, 2 * Math.PI, false);
	context.fillStyle = color;
	context.fill();
	context.lineWidth = stroke;
	context.strokeStyle = strokecolor;
	context.stroke();
}