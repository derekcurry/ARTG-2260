/*
Circle with gradient in the center function
For rendering on HTML5 Canvas
Derek Curry 2015 -- for DMS 110
*/

// You MUST set up the canvas element to be referenced by JavaScript:
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

console.log('Imported circle file'); // checks to make sure file is imported

// Circle variables x-center, y-center, radius, inner gradiant color, outer gradiant color, stroke size, stroke color

function gradientCircle(x,y,r,c1,c2,stroke,strokecolor) {
	// The circle is translated to center the gradient: http://www.w3schools.com/tags/canvas_translate.asp
	context.save();  // context is saved
	context.translate(x, y);  // the translate x & y are what place the circle

	context.beginPath();
	context.arc(0, 0, r, 0, 2 * Math.PI, false);
	// create radial gradient
	var grd = context.createRadialGradient(0, 0, r/10, 0, 0, r);
	grd.addColorStop(0, c1);
	grd.addColorStop(1, c2);

	context.fillStyle = grd;
	context.fill();
	context.lineWidth = stroke;
	context.strokeStyle = strokecolor;
	context.stroke();

	context.restore();  // context is restored
}

function drawTriangle(xTop, yTop, lengthSide, rotation, fillColor, strokeWidth, strokeColor) {
	// Made by: Tomasz Pietruszka

	// xTop and yTop refer to the top point of the equilateral triangle
	// rotation is a clockwise rotation around that point in Radians

	context.save();

	context.beginPath();

	context.translate(xTop, yTop);
	context.rotate(rotation);

	context.moveTo(0, 0);
	context.rotate(1.04719755/2); //rotate for the first side: 30 degrees
	context.lineTo(0, lengthSide);

	context.translate(0, lengthSide);
	context.rotate(-2 * 1.04719755); //rotate for the second side: -120 degrees 
	context.lineTo(0, lengthSide);

	context.translate(0, lengthSide);
	context.rotate(-2 * 1.04719755); //rotate for the second side: -120 degrees
	context.lineTo(0, lengthSide);

	context.closePath();

	context.fillStyle = fillColor;
	context.fill();
	
	context.lineWidth = strokeWidth;
	context.strokeStyle = strokeColor;
	context.stroke();

	context.restore();
}

function drawRectangle(x,y,w,h, stroke, strokecolor, color) {
	context.rect(x, y, w, h);
	context.strokeStyle= strokecolor;
	context.lineWidth = stroke;
	context.fillStyle = color;
	context.stroke();
	context.fill();
}


