function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0)
  text("Ejercisio Git",50 + (frameCount),50)
  text("Hola",-400 + (frameCount),50)
  for (let index = 0; index < frameCount; index+=random(2,10)) {
    for (let j = 0; j < frameCount; j+=random(2,10)) {
      fill(random(100,200))
    text("Algo mas",60 +(index*2),60 +(index*2) + j)

    }
    
    
  }
}
