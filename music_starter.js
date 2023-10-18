let firstRun = true
let eyeImg;

let Pupil = [];
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   
  //colorMode(HSB,255);
  background(20);
  //textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER);
  //textSize(24);
  strokeWeight(3);
  

  //   let orange = color(245, 140, 34);
  //  let purple = color(144, 80, 222);

  //  let mapForColorLerp = map(other,0, 100,0,1)
  //  let EllipseColour = lerpColor(orange,purple,mapForColorLerp);

  //  fill(EllipseColour);
  //  let EllipseSize = map(drum,0,100,100,200);
  //  ellipse(width/2, height/2,EllipseSize,EllipseSize);

  

   let redColor = color(205, 60, 72);
   let purpleColor = color(162, 98, 177);

   let vocalLerpNumber = map(vocal, 0, 100, 0,1);
   let vocalColor = lerpColor(purpleColor,redColor,vocalLerpNumber)

strokeWeight(5)

let sizeofBlock = 1000;

for(let i = 0; i <sizeofBlock; i++){
let gradenAmount = map(i,0,sizeofBlock,0,1)
let strokeColor = lerpColor(vocalColor,redColor,gradenAmount)

stroke(strokeColor)
  line(0,100+i, width, 100+i)
}


if (firstRun){
   rectMode(CENTER);
   eyeImg = loadImage('eye.png');

   Pupil.push(loadImage('Pupil_0.png'));
   Pupil.push(loadImage('Pupil_1.png'));
   Pupil.push(loadImage('Pupil_2.png'));
   Pupil.push(loadImage('Pupil_3.png'));
   Pupil.push(loadImage('Pupil_4.png'));
   Pupil.push(loadImage('Pupil_5.png'));
   Pupil.push(loadImage('Pupil_6.png'));
   Pupil.push(loadImage('Pupil_7.png'));
   Pupil.push(loadImage('Pupil_8.png'));
   Pupil.push(loadImage('Pupil_9.png'));
   Pupil.push(loadImage('Pupil_10.png'));
   Pupil.push(loadImage('Pupil_11.png'));
   Pupil.push(loadImage('Pupil_12.png'));
   Pupil.push(loadImage('Pupil_13.png'));
   Pupil.push(loadImage('Pupil_14.png'));
   Pupil.push(loadImage('Pupil_15.png'));
   Pupil.push(loadImage('Pupil_16.png'));
   Pupil.push(loadImage('Pupil_17.png'));
   
   
  


   firstRun = false
}

image(eyeImg, 250, 400)


var DrumFrame = int(map(drum, 0, 90,0,16));

console.log(DrumFrame);
push();
image(Pupil[DrumFrame],480,575)
pop();




//    var drumMap =map(drum, 0,100, 10, 40);
//    var length0fLine = 300;
//    var LineStart = 100;
//    var lineEnd = LineStart+length0fLine;
//    stroke(drumMap,80,80);

//    for (var i =1;i <= drumMap; i++){
//     var lineStep = i*25;
//     line(LineStart, lineStep, lineEnd, lineStep);
//    }

// stroke(yellowColor)

// let baseWave = map(bass, 0, 140,20,120)
// let waveHight = baseWave;
// let waveFreq =2

// let baseYLoki = height/2;
// beginShape()
// for (let i = 0; i < width; i++){
//    vertex(i, baseYLoki -waveHight*sin(waveFreq *i))
// }
// endShape()


// stroke(yellowColor)

// let vocalWave = map(vocal, 0, 140,20,120)
// let wave2Hight = vocalWave;
// let wave2Freq = 5

// let baseYLoki2 = height/4;
// beginShape()
// for (let i = 0; i < width; i++){
//    vertex(i, baseYLoki2 -wave2Hight*sin(wave2Freq *i))
// }
// endShape()


// let otherWave = map(other, 0, 100,10,100)
// let wave3Hight = otherWave;
// let wave3Freq = 2

// let baseYLoki3 = height/8;
// beginShape()
// for (let i = 0; i < width; i++){
//    vertex(i, baseYLoki3 -wave3Hight*sin(wave3Freq *i))
// }
// endShape()




   // let bar_spacing = height / 10;
   // let bar_height = width / 12;
   // let bar_pos_x = width / 2;
 

   // // vocal bar is red
   // fill(200, 0, 0);
   // rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   // fill(0);
   // text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // // drum bar is green
   // fill(0, 200, 0);
   // rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   // fill(0);
   // text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // // bass bar is blue
   // fill(50, 50, 240);
   // rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   // fill(0);
   // text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // // other bar is white
   // fill(200, 200, 200);
   // rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   // fill(0);
   // text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   // fill(255, 255, 0);
 
   // // display "words"
   // textAlign(CENTER);
   // textSize(vocal);
   // text(words, width/2, height/3);
}