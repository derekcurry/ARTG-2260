console.log('bubble maker imported!');

// Declare variables (including one for the timer)
var running = false;
var bubblesTimer;

function makebubble() {
	var x = Math.floor((Math.random() * 600) + 1);
	var y = Math.floor((Math.random() * 400) + 1);
	var r = Math.floor((Math.random() * 150) + 1);
	var c1 = 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
	var c2 = 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
	var stroke = Math.floor((Math.random() * 10) + 1);
	var strokecolor = 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
	
	// This clears the canvas before adding a new bubble:
	context.clearRect(0,0,canvas.width,canvas.height);
	// Make the circle:
	gradientCircle(x,y,r,c1,c2,stroke,strokecolor);
	//console.log(r); // logs radius for testing
}



function start() {
	if (!running) {
		console.log('Make bubbles!!!')
		bubblesTimer = setInterval(makebubble, 500);
		document.getElementById('startBtn').innerHTML = 'Stop making bubbles!';
		running = true;
	} else {
		console.log('Bubbles stopped')
		clearInterval(bubblesTimer);
		document.getElementById('startBtn').innerHTML = 'Continue with bubble making!';
		running = false;
	}
}