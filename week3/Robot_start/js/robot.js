/* *******************************************
This file will contain functions for building parts for your robot
********************************************** */

function drawFace() {
	// circle vars: start x, start y, radius, color, stroke, strokecolor
	// Head circle:
	drawCircle(canvas.width / 2, canvas.height / 2, 70, 'yellow',5, 'black');
	// Left eye:
	drawCircle((canvas.width / 2)-25, 190, 15, 'red',3, 'black');
	drawCircle((canvas.width / 2)-25, 190, 5, 'black',3, 'black');
	// Right eye:
	drawCircle((canvas.width / 2)+25, 190, 15, 'white',3, 'black');
	drawCircle((canvas.width / 2)+25, 190, 5, 'black',3, 'black');
	// Draw the mouth here:
}


drawFace();