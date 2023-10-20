let firstRun = true
let eyeImg;
let Pupil = [];
let Effects = [];
let discoBalls = [];
let smallStar1 = [];
let smallStar2 = [];
let bigStar1 = [];
let bigStar2 = [];

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

  

   let pinkColor = color(250, 80, 134 ); //205, 60, 72    232, 23, 40 
   let purpleColor = color(162, 98, 177); //162, 98, 177  185, 84, 209
   let darkredColor = color(176, 32, 44) // 209, 42, 56

   let vocalLerpNumber = map(vocal, 0, 100, 0,1);
   let vocalColor = lerpColor(purpleColor,pinkColor,vocalLerpNumber)

strokeWeight(5)

let sizeofBlock = 1000;

for(let i = 0; i <sizeofBlock; i++){
let gradenAmount = map(i,0,sizeofBlock,0,1)
let strokeColor = lerpColor(vocalColor,darkredColor,gradenAmount)

stroke(strokeColor)
  line(0,100+i, width, 100+i)
}


if (firstRun){
   discoBalls.push(loadImage('Balls_0.png'));
   discoBalls.push(loadImage('Balls_1.png'));
   discoBalls.push(loadImage('Balls_2.png'));
   discoBalls.push(loadImage('Balls_3.png'));
   discoBalls.push(loadImage('Balls_4.png'));
   discoBalls.push(loadImage('Balls_5.png'));


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
   Pupil.push(loadImage('Pupil_18.png'));

   Effects.push(loadImage('effects_0.png'));
   Effects.push(loadImage('effects_1.png'));
   Effects.push(loadImage('effects_2.png'));
   Effects.push(loadImage('effects_3.png'));
   Effects.push(loadImage('effects_4.png'));
   Effects.push(loadImage('effects_5.png'));
   Effects.push(loadImage('effects_6.png'));
   Effects.push(loadImage('effects_7.png'));
   Effects.push(loadImage('effects_8.png'));

   smallStar1.push(loadImage('smallStar1_0.png'));
   smallStar1.push(loadImage('smallStar1_1.png'));
   smallStar1.push(loadImage('smallStar1_2.png'));
   smallStar1.push(loadImage('smallStar1_3.png'));
   smallStar1.push(loadImage('smallStar1_4.png'));
   smallStar1.push(loadImage('smallStar1_5.png'));
   //smallStar1.push(loadImage('smallStar1_6.png'));
   

   smallStar2.push(loadImage('smallStar2_0.png'));
   smallStar2.push(loadImage('smallStar2_1.png'));
   smallStar2.push(loadImage('smallStar2_2.png'));
   smallStar2.push(loadImage('smallStar2_3.png'));
   smallStar2.push(loadImage('smallStar2_4.png'));
   smallStar2.push(loadImage('smallStar2_5.png'));
   //smallStar2.push(loadImage('smallStar2_6.png'));

   bigStar1.push(loadImage('bigStar1_0.png'));
   bigStar1.push(loadImage('bigStar1_1.png'));
   bigStar1.push(loadImage('bigStar1_2.png'));
   bigStar1.push(loadImage('bigStar1_3.png'));
   bigStar1.push(loadImage('bigStar1_4.png'));
   bigStar1.push(loadImage('bigStar1_5.png'));
   //bigStar1.push(loadImage('bigStar1_6.png'));

   bigStar2.push(loadImage('bigStar1_0.png'));
   bigStar2.push(loadImage('bigStar1_1.png'));
   bigStar2.push(loadImage('bigStar1_2.png'));
   bigStar2.push(loadImage('bigStar1_3.png'));
   bigStar2.push(loadImage('bigStar1_4.png'));
   bigStar2.push(loadImage('bigStar1_5.png'));
   //bigStar2.push(loadImage('bigStar1_6.png'));

   firstRun = false
}

var DrumFrame = int(map(drum,0,100,0,8));

console.log(DrumFrame);
push();
scale(1.1);
image(Effects[DrumFrame],100,390)
pop();

var DrumFrame = int(map(drum,0,100,0,4));

console.log(DrumFrame);
push();
scale(1.1);
image(discoBalls[DrumFrame],60,88)
pop();


image(eyeImg, 220, 400)



var DrumFrame = int(map(drum, 0, 100,0,11));

console.log(DrumFrame);
push();
image(Pupil[DrumFrame],450,575)
pop();


var BassFrame = int(map(bass,0,100,0,5));

console.log(BassFrame);
push();
scale(1.1);
image(smallStar1[BassFrame],530,268)
pop();



var BassFrame = int(map(bass,0,100,0,5));

console.log(BassFrame);
push();
scale(1.1);
image(smallStar2[BassFrame],990,130)
pop();



var BassFrame = int(map(bass,0,100,0,5));

console.log(BassFrame);
push();
scale(1.1);
image(bigStar1[BassFrame],710,80)
pop();



var BassFrame = int(map(bass,0,100,0,5));

console.log(BassFrame);
push();
scale(1.1);
image(bigStar2[BassFrame],35,230)
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