var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var x = 50;

function getRanColor() {
	return 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
}
function getRanStroke() {
	return 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
}
var c1 = getRanColor();
var c2 = getRanColor();
var strokecolor = getRanStroke();
var x = -20;
var y = 21;

function makeRect() {
	
	if (x >= canvas.width + 10) {
		console.log('Move down '+y);
		y += 41;
		x = -20;
		c1 = getRanColor();
		c2 = getRanColor();
	} 

	x += 41;
	
	// Make the circle:
	//gradientCircle(x,y,20,c1,c2,3,strokecolor);

	drawRectangle(x,y,20, 20, 2, c2, c1);
	//console.log(x);
}


bubblesTimer = setInterval(makeRect, 250);








