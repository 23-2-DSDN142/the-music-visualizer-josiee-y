
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB,255);
  background(255);
  //textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER);
  //textSize(24);
  strokeWeight(7);
  

  //   let orange = color(245, 140, 34);
  //  let purple = color(144, 80, 222);

  //  let mapForColorLerp = map(other,0, 100,0,1)
  //  let EllipseColour = lerpColor(orange,purple,mapForColorLerp);

  //  fill(EllipseColour);
  //  let EllipseSize = map(drum,0,100,100,200);
  //  ellipse(width/2, height/2,EllipseSize,EllipseSize);

  
let purpleColor = color(159, 76, 207)
let yellowColor = color(252, 165, 3)

strokeWeight(3)

let sizeofBlock = 600;

for(let i = 0; i <sizeofBlock; i++){
let gradenAmount = map(i,0,sizeofBlock,0,1)
let strokeColor =lerpColor(purpleColor,yellowColor,gradenAmount)

stroke(strokeColor)
  line(0,100+i, width, 100+i)
}


   var drumMap =map(drum, 0,100, 10, 40);
   var length0fLine = 300;
   var LineStart = 100;
   var lineEnd = LineStart+length0fLine;
   stroke(drumMap,80,80);

   

   for (var i =1;i <= drumMap; i++){
    var lineStep = i*25;
    line(LineStart, lineStep, lineEnd, lineStep);
   }




stroke(yellowColor)

let baseWave = map(bass, 0, 140,20,120)
let waveHight = baseWave;
let waveFreq =2

let baseYLoki = height/2;
beginShape()
for (let i = 0; i < width; i++){
   vertex(i, baseYLoki -waveHight*sin(waveFreq *i))
}
endShape()


stroke(yellowColor)

let vocalWave = map(vocal, 0, 140,20,120)
let wave2Hight = vocalWave;
let wave2Freq = 5

let baseYLoki2 = height/4;
beginShape()
for (let i = 0; i < width; i++){
   vertex(i, baseYLoki2 -wave2Hight*sin(wave2Freq *i))
}
endShape()


let otherWave = map(other, 0, 100,10,100)
let wave3Hight = otherWave;
let wave3Freq = 2

let baseYLoki3 = height/8;
beginShape()
for (let i = 0; i < width; i++){
   vertex(i, baseYLoki3 -wave3Hight*sin(wave3Freq *i))
}
endShape()

  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
}