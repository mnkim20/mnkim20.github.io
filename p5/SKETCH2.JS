function setup() {
  createCanvas(550, 150);
  noStroke();
}
function draw() {
  background(37, 50, 79);
ellipse(mouseX, 70, 150, 150)// Top circle
ellipse(mouseX/5, 50, 20, 20) 
ellipse(mouseX*2, 84, 100, 100)
fill (255, 255, 255);// Bottom circle
	
}
