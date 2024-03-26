//eyemovement
let eyeY = 150;
let eyeshineY = 145;
let eye1x = 245;
let eye2x = 315;

//flymovement
let flyx = 100;
let flyy = 300;
let wingx= 95;
let wingy = 297;

//lilymovement
let lily1x = 60;
let lily2x = 520;
let lily1y = 240;
let lily2y =220;
let speed = 0.5;

//clouds

let cloudspeed = 0.5;
let cloud1cluster1 = 200;
let cloud1cluster2 = 275;
let cloud1cluster3 = 250;
let cloud1cluster4 = 355;
let cloud1cluster5 = 200;
let cloud1cluster6 = 150;
let cloud1cluster7 = 15;

let cloud2cluster1 = 0;
let cloud2cluster2 = -5;
let cloud2cluster3 = -20;
let cloud2cluster4 = -15;
let cloud2cluster5 = 3;
let cloud2cluster6 = -25;
    
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  //white border
    fill(1000,1000,1000);
    noStroke(0);
    rect(0,0,600,400);
  
  //blue sky
    fill(74, 207, 255);
    stroke(0,300,500);
    rect(10,10,575,375);
  
  //pond
    fill(34, 151, 214);
    stroke(0,200,300);
    rect(10,200,575,375);
  
  //sun
    fill(255,175,50);
    stroke(200,150,0);
    ellipse(75,75,50,50);
  
  //lilypad (main)
    fill(0,220,30);
    stroke(18, 117, 59);
    arc(300, 300, 450, 100, 5, PI+ QUARTER_PI,PIE);
  
  //lilypad (background)
  arc(lily1x, lily1y, 90, 20, 5, PI + QUARTER_PI, PIE);
    arc(lily2x, lily2y, 50, 10, 5, PI, PIE);
  
  lily1x = lily1x + 1;
  lily2x = lily2x - 1;
  

if (lily1x == 530)
  {
    lily1x = 60;
  }

  if (lily2x == 50)
    {
      lily2x = 520;
    }
  
  
  //cloud 1
    fill(1000,1000,1000);
    noStroke();
    ellipse(cloud1cluster1,80,100,30);
    ellipse(cloud1cluster2,85,100,30);
    ellipse(cloud1cluster3,80,100,40);
    ellipse(cloud1cluster4,50,50,15);
    ellipse(cloud1cluster5,75,40,15);
    ellipse(cloud1cluster6,100,50,15);
    ellipse(cloud1cluster7,120,25,15);
  
  cloud1cluster1 = cloud1cluster1 + cloudspeed;
  cloud1cluster2 = cloud1cluster2 + cloudspeed;
  cloud1cluster3 = cloud1cluster3 + cloudspeed;
  cloud1cluster4 = cloud1cluster4 + cloudspeed;
  cloud1cluster5 = cloud1cluster5 + cloudspeed;
  cloud1cluster6 = cloud1cluster6 + cloudspeed;
  cloud1cluster7 = cloud1cluster7 + cloudspeed;
  

  //cloud 2
    ellipse(cloud2cluster1,50,100,30);
    ellipse(cloud2cluster2,65,100,30);
    ellipse(cloud2cluster3,60,100,40);
    ellipse(cloud2cluster4,40,50,15);
    ellipse(cloud2cluster5,75,40,15);
    ellipse(cloud2cluster6,80,50,15);
  
  cloud2cluster1 = cloud2cluster1 + cloudspeed;
  cloud2cluster2 = cloud2cluster2 + cloudspeed;
  cloud2cluster3 = cloud2cluster3 + cloudspeed;
  cloud2cluster4 = cloud2cluster4 + cloudspeed;
  cloud2cluster5 = cloud2cluster5 + cloudspeed;
  cloud2cluster6 = cloud2cluster6 + cloudspeed;
  
  //froggie (base color);3
    stroke(10, 110, 31);
    fill(108, 245, 135);
    beginShape();
    rect(200,135,175,170,100);
    ellipse(250,140,60,60);
    ellipse(320,140,60,60);
  
  //belly
    fill (185, 255, 163);
    rect (260,225,55,80,10);
    
  //arms and legs
    rect(200,265,50,40,30);
    rect(330,265,50,40,30);
    rect(260,285,25,40,10);
    rect(290,285,25,40,10);
    endShape();
  
  //froggie (eyes)
    fill(226, 255, 196);
    ellipse(250,140,40,40);
    ellipse(320,140,40,40);
    
  
  //froggie (pupil)
    fill (14, 26, 3);
    ellipse(eye1x,eyeY,20,20);
    ellipse(eye2x,eyeY,20,20);
  
//froggie (highlight)
    fill(255, 255, 255);
    ellipse(eye1x,eyeshineY,5,5);
    ellipse(eye2x,eyeshineY,5,5);
      
  //fly (body)
    fill(0);
    noStroke();
    ellipse(flyx,flyy,13,7);
  
  //fly (wings)
    fill(193, 214, 207);
    stroke(126, 158, 148);
    ellipse(wingx,wingy,10,5);

flyy = flyy - 0.5;
wingy = wingy - 0.5;

  if (flyy == 205)
    {
      flyy = 300;
    }
  if (wingy == 202)
    {
      wingy = 297;
    }

flyx = flyx + 0.5;
  wingx = wingx + 0.5;
  if (flyx ==195)
    {
      flyx = 100;
    }
  if (wingx == 190)
    {
      wingx = 95;
    }
  
  
 //froggie (smile)
    stroke(222, 13, 90);
    line(270,175,300,175);
  
 strokeWeight(4);
  
}