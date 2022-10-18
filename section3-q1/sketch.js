// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  ellipse(width / 2, height / 2, 20);

  if(keyIsDown("A".charCodeAt(0))){
    if(count<10){
      ellipse(width / 2, height / 2, 50)
   }
   else if(10<=count<20){
     ellipse(width / 2, height / 2, 100)
     count=0
   }
  }
  

  else  {
    if(count<50){
      ellipse(width / 2, height / 2, 50) 
    }
    else if(50<count<=100){
      ellipse(width / 2, height / 2, 100) 
      count=0 
    }
  }
}