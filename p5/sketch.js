var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000, 400);
  centerCanvas();
  background(240, 208, 255);
}

function windowResized() {
  centerCanvas();
}

  function draw() {
  if (mouseX !== pmouseX || mouseY !== pmouseY) {  
  if (mouseIsPressed) {
  fill(89, 9, 126);
  } 
  else {
  fill(random(300),random(700),random(200)); 
  }
  {
  rect(mouseX, mouseY, 80, 80);
  //ellipse(mouseX, mouseY, 80, 80);
  }