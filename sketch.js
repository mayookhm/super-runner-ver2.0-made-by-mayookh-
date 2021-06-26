var pathImg,path;
var boyImg,runner;
var gamestate="play";
var score = 0;
var life = 5;
var  virusimg, virus , virus1 , virus1img;
var monsterImg , monster,monsterGroup;
var gameoverImage,gameover;
var coin,coinimg,coingroup;
var left,right;
var restartimg ,restart;
var dragon , dragonimg;
var dragonleft , dragonleftimg;
var lifeadd , lifeimg;
var win , winimg;
function preload(){
  pathImg = loadImage("images/temple run 2.jpg");
  boyImg = loadAnimation("images/Jake1.png","images/Jake2.png","images/jake3.png","images/jake4.PNG","images/jake5.png");
  monsterImg = loadImage("images/bomb.png");
  gameoverImage = loadImage("images/gameover.png");
  coinimg = loadImage("images/coin.png");
  virusimg = loadImage("images/virus.png")
  restartimg = loadImage("images/restart.png");
  dragonimg = loadImage("images/dragon.png");
  dragonleftimg = loadImage("images/dragonleft.png");
  lifeimg = loadImage("images/life.png");
  virus1img = loadImage("images/virus2.png");
  winimg = loadImage("images/win.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
path = createSprite(width/2,50,width+500,height);
path.scale=3.5
path.addImage(pathImg);

runner = createSprite(500,440,30,30);
runner.addAnimation("runner running",boyImg);
monsterGroup=new Group();
coingroup = new Group();
lifegroup = new Group();
left = createButton('left');
this.left.position(100,500);
this.left.style('background', 'lightgreen');

right = createButton('right');
this.right.position(1200,500);
this.right.style('background', 'lightgreen');

gameover = createSprite(width/2,200);
  gameover.addImage(gameoverImage);
gameover.scale = 1.5;
gameover.visible = false;

win = createSprite(width/2,200);
win.addImage(winimg);
win.scale = 1.5;
win.visible = false;


  restart = createSprite(width/2,400);
  restart.addImage(restartimg);
  restart.scale = 0.2;
restart.visible = false;
}

function draw() {
  background("white"); 
  
  path.velocityY = 4;
  if(path.y > 600 ){
    path.y = height/2;
  }
  if(keyDown("space")){
    runner.velocityY=-10; 
   }
   if(keyDown("left_arrow")){
   runner.x=runner.x-11;  
   }
   if(keyDown("right_arrow")){
    runner.x=runner.x+11;  
   }

spawncoin();
   spawnMonster();
   
   spawnMonster1();
   spawnMonster2();
   spawnMonster3();
   spawnMonster4();
   spawnlife();

   if(mousePressedOver(restart)) {
    reset();
  }
  drawSprites();

  if(monsterGroup.isTouching(runner)){
    monsterGroup.destroyEach();  
   life = life -1 ;
    }  
    if(coingroup.isTouching(runner)){
      coingroup.destroyEach();  
    score= score +1;
      }  
 
      
      if(lifegroup.isTouching(runner)){
        lifegroup.destroyEach();  
      life= life +1;
        }  
        if(life===0){
          gamestate = "end";
        }


        if(score===20){
          gamestate = "win";
        }
  if(gamestate==="end"){
 gameover.visible = true;
 restart.visible = true;
 runner.destroy();
 monsterGroup.destroyEach();  
 coingroup.destroyEach(); 
 lifegroup.destroyEach();
 }

 if(gamestate==="win"){
  win.visible = true;
  restart.visible = true;
  runner.destroy();
 monsterGroup.destroyEach();  
 coingroup.destroyEach(); 
 lifegroup.destroyEach();
 path.velocityY = 0;
 path.velocityX = 0;
 }




 this.left.mousePressed(() => {
  runner.x=runner.x-11;  
}); 
this.right.mousePressed(() => {
  runner.x=runner.x+11;  
}); 







stroke("red");
textSize(30);
fill("red")
text("COINS : "+score,250,90);
text("LIFE : "+life,500,90);

textSize(18);
fill("red");
  text("CLICK THE LEFT OR UP RIGHT KEYS TO MOVE THE RUNNER ||| YOU CAN WIN THE GAME BY SCORING 20 COINS |||| MADE BY #### MAYOOKH #### ",50,30);
}
function spawnMonster(){
  if(frameCount%30===0){
  monster=createSprite(300,100,20,20); 
  monster.velocityY=6;  
  monster.scale=0.1;
  monster.addImage(monsterImg);
  monster.x=Math.round(random(100,1200));
  monsterGroup.add(monster);
  }  
}
function spawncoin(){
  if(frameCount%30===0){
  coin=createSprite(300,100,20,20); 
  coin.velocityY=6;  
  coin.scale=0.5;
  coin.addImage(coinimg);
  coin.x=Math.round(random(100,1200));
  coingroup.add(coin);
  }  
}
function spawnMonster1(){
  if(frameCount%10===0){
  virus=createSprite(300,100,20,20); 
  virus.velocityY=6;  
  virus.scale=0.1;
  virus.addImage(virusimg);
  virus.x=Math.round(random(100,1200));
  monsterGroup.add(virus);
  }  
}
function spawnMonster2(){
  if(frameCount%30===0){
  dragon=createSprite(300,100,20,20); 
  dragon.velocityY=6;  
 dragon.scale=0.6;
  dragon.addImage(dragonimg);
  dragon.x=Math.round(1340);
  monsterGroup.add(dragon);
  }  
}
function spawnMonster3(){
  if(frameCount%30===0){
  dragonleft=createSprite(300,100,20,20); 
  dragonleft.velocityY=6;  
  dragonleft.scale=0.6;
  dragonleft.addImage(dragonleftimg);
  dragonleft.x=Math.round(13);
  monsterGroup.add(dragonleft);
  }  
}
function spawnMonster4(){
  if(frameCount%40===0){
  virus1=createSprite(300,100,20,20); 
  virus1.velocityY=6;  
  virus1.scale=0.1;
  virus1.addImage(virus1img);
  virus1.x=Math.round(random(100,1200));
  monsterGroup.add(virus1);
  }  
}

function spawnlife(){
  if(frameCount%50===0){
  lifeadd=createSprite(300,100,20,20); 
  lifeadd.velocityY=6;  
  lifeadd.scale=0.1;
  lifeadd.addImage(lifeimg);
  lifeadd.x=Math.round(random(100,1200));
  lifegroup.add(lifeadd);
  }  
}



function reset(){


  runner.visible = true;
  monsterGroup.visible = true;
  coingroup.visible = true;
   score = 0;
   location.reload();
}

