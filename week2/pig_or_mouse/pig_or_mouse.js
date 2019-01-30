console.log('script imported');

// Declare the constants
const pig = "<img src='img/piggy.jpg'>";
const mouse = "<img src='img/mouse.jpg'>";
const idk = "<img src='img/idk.jpg'>";

const image = document.getElementById('animal');
const txt = document.getElementById('animalText')

// Get user input and set the animal variable equal to it
var animal = prompt("Choose an animal", "animal");

// Compare user input to strings to 'mouse' and 'pig'
// Change the image and text on the HTML page to match the animal
if(animal.toLowerCase() == 'mouse') {
	console.log("It's a mouse!");
	image.innerHTML = mouse;
	txt.innerHTML = "It's a cute mouse!"
} else if(animal.toLowerCase() == 'pig' || animal.toLowerCase() =='piggy') {
	console.log("It's a pig!");
	image.innerHTML = pig;
	txt.innerHTML = "It's a cute piggy!"
} else {
	console.log("Sorry, I don't know that animal.");
	image.innerHTML = idk;
	txt.innerHTML = "Sorry, I don't know what this animal is."
}

// Add CSS classes that animate the image and text
image.classList.add("rotate-in-hor");
txt.classList.add("focus-in-expand-fwd");
