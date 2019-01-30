console.log('bubble maker imported!');

// Declare variables (including one for the timer)
var running = false;
var bubblesTimer;

function ranColor() {
	return 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
}

var rotate = 0;
var len = 500;
var strokecolor = 'black';
//var c1 = 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
function makeTriangle() {
	// drawTriangle(xTop, yTop, lengthSide, rotation, fillColor, strokeWidth, strokeColor)
	drawTriangle(canvas.width/2, canvas.height/2, len, rotate, ranColor(), 2, strokecolor);
	rotate += 0.5;
	len -= 0.5;
	if (len <= -500){
		len = 500;
	}
	if (len <= 0) {
		strokecolor = 'white';
	} else {
		strokecolor = 'black'
	}
	console.log(len);
}

function start() {
	if (!running) {
		console.log('Make triangles!!!');
		triangleTimer = setInterval(makeTriangle, 50);
		document.getElementById('startBtn').innerHTML = 'Stop entering bolivion!';
		running = true;
	} else {
		console.log('Triangles stopped');
		clearInterval(triangleTimer);
		document.getElementById('startBtn').innerHTML = 'Continue bolivion entering!';
		running = false;
	}
}