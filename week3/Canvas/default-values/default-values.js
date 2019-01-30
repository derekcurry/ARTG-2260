var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function drawLine(x1,y1,x2,y2,stroke,strokecolor,cap) {
	if (typeof(x1)==='undefined') x1 = 100;
	if (typeof(y1)==='undefined') y1 = 100;
	if (typeof(x2)==='undefined') x2 = 350;
	if (typeof(y2)==='undefined') y2 = 200;
	if (typeof(stroke)==='undefined') stroke = 5;
	if (typeof(strokecolor)==='undefined') strokecolor = 'black';
	if (typeof(cap)==='undefined') cap = 'round';

	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.lineWidth = stroke;
	context.strokeStyle = strokecolor;
	context.lineCap = cap;
	context.stroke();
}

function drawRect(x,y,w,h,color,stroke,strokecolor) {
	if (typeof(x)==='undefined') x = 0;
	if (typeof(y)==='undefined') y = 0;
	if (typeof(w)==='undefined') w = 100;
	if (typeof(h)==='undefined') h = 100;
	if (typeof(color)==='undefined') color = 'yellow';
	if (typeof(stroke)==='undefined') stroke = 2;
	if (typeof(strokecolor)==='undefined') strokecolor = 'black';
	
	context.beginPath();
	context.rect(x, y, w, h);
	context.fillStyle = color;
	context.fill();
	context.lineWidth = stroke;
	context.strokeStyle = strokecolor;
	context.stroke();
}

function drawCircle(x,y,r,color,stroke,strokecolor) {
	if (typeof(x)==='undefined') x = canvas.width / 2;
	if (typeof(y)==='undefined') y = canvas.height / 2;
	if (typeof(r)==='undefined') r = 50;
	if (typeof(color)==='undefined') color = 'green';
	if (typeof(stroke)==='undefined') stroke = 3;
	if (typeof(strokecolor)==='undefined') strokecolor = '#003300';

	context.beginPath();
	context.arc(x, y, r, 0, 2 * Math.PI, false);
	context.fillStyle = color;
	context.fill();
	context.lineWidth = stroke;
	context.strokeStyle = strokecolor;
	context.stroke();
}

function showImage(x,y,image,w,h) {
	if (typeof(x)==='undefined') x = 0;
	if (typeof(y)==='undefined') y = 0;
	if (typeof(image)==='undefined') image = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
	if (typeof(w)==='undefined') w = 200;
	if (typeof(h)==='undefined') h = 137;
	var imageObj = new Image();

	imageObj.onload = function() {
		context.drawImage(imageObj, x, y, w, h);
	};
	imageObj.src = image;
}
      
function drawText(t,x,y,color,size,f) {
	if (typeof(t)==='undefined') t = 'Hello World!';
	if (typeof(x)==='undefined') x = 10;
	if (typeof(y)==='undefined') y = canvas.height / 2;
	if (typeof(size)==='undefined') size = '40pt'
	if (typeof(f)==='undefined') f = 'Calibri';
	if (typeof(color)==='undefined') color = 'black';

	f_style = size+'pt '+f;

	context.font = f_style;
	context.fillStyle = color;
	context.fillText(t, x, y);
}


