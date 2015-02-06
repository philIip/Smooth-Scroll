var scrollY = 0;
var distance = 40;
var speed = 10;


//This function will scroll to the top of el with a smooth scrolling animation 
function autoScrollTo(el) {
	var currentY = window.pageYOffset; // how far the user has scrolled vertically
	var targetY = document.getElementById(el).offsetTop; // how far the element is from the top of its parent element, which should be the body element
	var bodyHeight = document.body.offsetHeight; // height of body element
	var yPosition = currentY + window.innerHeight; // height of the viewport + how far the user has scrolled down into the page
	var animator = setTimeout('autoScrollTo(\''+el+'\')',speed); // this is where the animation happens

	if (yPosition <= bodyHeight) {
		// adds distance repeatedly until we've reached the top targetY
		if (currentY < targetY-distance) {
			scrollY = currentY + distance;
			window.scroll(0,scrollY);
		}
		else {
			clearTimeout(animator);
		}
	}

	// When the we've scrolled to the bottom of the page, we want to make sure the scrolling animation stops
	else {
		clearTimeout(animator);
	}
}

//This function creates a smooth scrolling animation back to el, which should be an element at the top of the page denoted by the programmer
function resetScroller(el) {
	var currentY = window.pageYOffset; // how far the user has scrolled vertically
	var targetY = document.getElementById(el).offsetTop; // how far the element is from the top of its parent element, which should be the body element
	var animator = setTimeout('resetScroller(\''+el+'\')',speed); //this is where the animation happens

	// subtracts disance repeatedly until we've reached the top of targetY
	if(currentY > targetY) {
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	}

	else {
		clearTimeout(animator);
	}
}