// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      fill((j+i)%2==1?125:250);
      rect(i*25,j*25,25,25);
      

      if(j<3&&(i+j)%2==1){
        fill(225,0,0)
        ellipse(12.5+25*i,12.5+25*j,23)}
     else if (4<j&&(i+j)%2==1){
      fill(0,0,0)
      ellipse(12.5+25*i,12.5+25*j,23)}
     }
      

      
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
