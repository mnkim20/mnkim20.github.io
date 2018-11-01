function setup() {
  createCanvas(1000, 400);
  background(240, 208, 255);
  }
  function draw() {
    
  if (mouseIsPressed) {
  fill(89, 9, 126);
  } 
  else {
  fill(random(300),random(700),random(200)); 
  }
  ellipse(mouseX, mouseY, 80, 80);
  }