function setup() {
  createCanvas(700, 400);
 
  background(238, 196, 255);
  }

function windowResized() {
  centerCanvas();
  }
  
function draw() {
	 
  if (mouseIsPressed) {
  fill(104, 0, 145);
  } else {
  fill(random(300),random(800),random(600));
  }
  ellipse(mouseX, mouseY, 80, 80);
  }