var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var x = 50;

// Functions to make random stroke colors
function getRanColor() {
	return 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
}

var c1 = getRanColor();
var c2 = getRanColor();
var strokecolor = getRanColor();
var r = Math.floor((Math.random() * 100) + 1);
var x_speed = 5;

function movebubble() {
	//console.log('Moving bubble');
	x += x_speed;
	if (x >= canvas.width + r) {
		x = -100;
		c1 = getRanColor();
		c2 = getRanColor();
		r = Math.floor((Math.random() * 100) + 1);
		x_speed = Math.floor((Math.random() * 10) + 1);
		strokecolor = getRanColor();
	} 
	
	// clear the canvas:
	context.clearRect(0,0,canvas.width,canvas.height);
	// Make the circle:
	gradientCircle(x,canvas.height/2,r,c1,c2,5,strokecolor);
	//console.log(x);
}


bubblesTimer = setInterval(movebubble, 50);








