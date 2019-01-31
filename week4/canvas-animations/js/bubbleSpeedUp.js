console.log('bubble maker imported!');

// Declare variables (including one for the timer)
var running = false;
var bubblesTimer;

var speed = 1000;
function makebubble() {
	// Making random vars for x, y, and radius
	var x = Math.floor((Math.random() * 600) + 1);
	var y = Math.floor((Math.random() * 400) + 1);
	var r = Math.floor((Math.random() * 150) + 1);
	// First color for gradiant
	var c1 = 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
	// Second color for the gradiant
	var c2 = 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';

	var stroke = Math.floor((Math.random() * 10) + 1);
	var strokecolor = 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
	// Make the circle:
	gradientCircle(x,y,r,c1,c2,stroke,strokecolor);
	//console.log(r);
	if(speed > 10){
		speed = speed - 50;
	} else {
		speed = 10;
	}
	
	console.log('Speed from make bubble', speed);
	if(running) {
		bubbleTimer = setTimeout(makebubble, speed);
	}
	
}



function start() {
	if (running == false) {
		console.log('Speed from start function', speed);
		bubblesTimer = setTimeout(makebubble, speed);
		document.getElementById('startBtn').innerHTML = 'Stop making bubbles!';
		running = true;

	} else {
		console.log('Bubbles stopped');
		clearTimeout(bubblesTimer);
		document.getElementById('startBtn').innerHTML = 'Continue with bubble making!';
		running = false;
	}
} 