// 最終課題を制作しよう

let player;
let x,y,vx,vy,a,b,c,d,e;
const g=1; //重力
const vyMax=2;

function setup(){
  createCanvas(900,windowHeight);
  x=0;
  a=150;
  b=300
  c=450
  d=600
  e=750
  y=height/2;
  vy=0.01;
  
}
function draw(){
  
  background(0);
  rect(430,y,30,30);
  
  vy+=g; //重力は「速度の変化量」
  vy=constrain(vy,-vyMax,vyMax);//速度が大きくなりすぎないように調整
 if(keyIsDown("A".charCodeAt(0)))
   {y+=-vy}
  else{y+=vy}
  y=constrain(y,0,height);

  x-=3
  a-=3
  b-=3
  c-=3
  d-=3
  e-=3
  
 

  

  rect(x,0,20,height/2);
  rect(x,height-height/4.5,20,height/4.5);
  rect(a,0,20,height/3.5);
  rect(a,height-height/3,20,height/3)
  rect(b,0,20,height/2.5);
  rect(b,height-height/4,20,height/4);
  rect(c,0,20,height/4);
  rect(c,height-height/2.5,20,height/2.5);
  rect(d,0,20,height/4.5);
  rect(d,height-height/2,20,height/2);
  rect(e,0,20,height/3);
  rect(e,height-height/3.5,20,height/3.5)
 
if(x<=0){
  x=900
  }
if(a<=0){
  a=900
  }
if(b<=0){
  b=900
  }
if(c<=0){
  c=900
  }
if(d<=0){
  d=900
  }
if(e<=0){
  e=900
  }

  


  function drew(){
    collisionDetect();
  }

  function collisionDetect(){
    const left1 = 430; // 矩形1の左端は矩形1のx位置 
    const right2x = x + 20 ;//矩形2の右端は矩形2のx位置に矩形2の幅を足した位置
    const right2a = a + 20 ;//矩形2の右端は矩形2のx位置に矩形2の幅を足した位置
    const right2b = b + 20 ;//矩形2の右端は矩形2のx位置に矩形2の幅を足した位置 
    const right2c = c + 20 ;//矩形2の右端は矩形2のx位置に矩形2の幅を足した位置
    const right2d = d + 20 ;//矩形2の右端は矩形2のx位置に矩形2の幅を足した位置
    const right2e = e + 20 ;//矩形2の右端は矩形2のx位置に矩形2の幅を足した位置
    const top1 = y; // 矩形1の上端は矩形1のy位置 
    const bottom2upx= height/2; // 矩形2の下端は矩形2のy位置に矩形2の高さを足した位置 
    const bottom2upa= height/3.5; // 矩形2の下端は矩形2のy位置に矩形2の高さを足した位置
    const bottom2upb= height/2.5; // 矩形2の下端は矩形2のy位置に矩形2の高さを足した位置
    const bottom2upc= height/4; // 矩形2の下端は矩形2のy位置に矩形2の高さを足した位置
    const bottom2upd= height/4.5; // 矩形2の下端は矩形2のy位置に矩形2の高さを足した位置
    const bottom2upe= height/3; // 矩形2の下端は矩形2のy位置に矩形2の高さを足した位置
    const bottom2down= height; // 矩形2の下端は矩形2のy位置に矩形2の高さを足した位置
    const right1 = 460; //矩形1の右端は矩形1のx位置に矩形1の幅を足した位置 
    const left2x = x; // 矩形2の左端は矩形2のx位置
    const left2a = a; // 矩形2の左端は矩形2のx位置
    const left2b = b; // 矩形2の左端は矩形2のx位置
    const left2c = c; // 矩形2の左端は矩形2のx位置
    const left2d = d; // 矩形2の左端は矩形2のx位置
    const left2e = e; // 矩形2の左端は矩形2のx位置
    const bottom1 = y+30; // 矩形1の下端は矩形1のy位置に矩形1の高さを足した位置 
    const top2up = 0; //矩形2の上端は矩形2のy位置
    const top2downx = height-height/4.5; //矩形2の上端は矩形2のy位置
    const top2downa = height-height/3; //矩形2の上端は矩形2のy位置
    const top2downb = height-height/4; //矩形2の上端は矩形2のy位置
    const top2downc = height-height/2.5; //矩形2の上端は矩形2のy位置
    const top2downd = height-height/2; //矩形2の上端は矩形2のy位置
    const top2downe = height-height/3.5; //矩形2の上端は矩形2のy位置

    if(left1<right2x&&top1<bottom2upx&&right1>left2x&&bottom1>top2up){
      text("GAME OVER",150,200)
    }
  }

 //流れる四角形にあたるとゲームオーバーになるという設定がチャレンジしましたができませんでした。
}





