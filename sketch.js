var path, boy, cash, diamonds, jwellery, sword;
var pathImg, boyImg, cashImg, diamondsImg, jwelleryImg, swordImg;
var treasureCollection = 0;
var cashG, diamondsG, jwelleryG, swordGroup;
var go, go1
var yw,yw1

//Game States
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload() {
  pathImg = loadImage("Road.png");
  boyImg = loadImage("Saab_Car_Museum_cars.jfif");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("Daytona_Beach_Police_Chevy_Impala_Rear.jpg")
  endImg = loadAnimation("gameOver.png");
  go1 = loadImage("gameOver.png")
  yw1 = loadImage("you-win-poster-with-prize-cup-vector-17052074.jpg")
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  // Moving background
  path = createSprite(width / 2, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  go = createSprite
  
  yw = createSprite(width / 2,200)
  yw.addImage("you win",yw1)
  yw.visible = false
  

  //creating boy running
  boy = createSprite(70, 580, 20, 20);
  boy.addImage("SahilRunning", boyImg);
  boy.scale = 0.08;
  boy.debug = false;
  boy.setCollider("rectangle",0,0,1000,1000)


  cashG = new Group();
  diamondsG = new Group();
  jwelleryG = new Group();
  swordGroup = new Group();

  go = createSprite(width / 2, height / 2, 50)
  go.addImage("gameoverimage", go1)
  go.visible = false

}

function draw() {
  go.visible = false;
 
  if (gameState === PLAY) {
    background(0);
    boy.x = World.mouseX;

    edges = createEdgeSprites();
    boy.collide(edges);

    //code to reset the background
    if (path.y > 400) {
      path.y = height / 10;
    }
    
    if (treasureCollection == 1000){
      yw.visible = true
      cashG.destroyEach();
      jwelleryG.destroyEach();
      diamondsG.destroyEach();
      swordGroup.destroyEach();
      boy.destroy();
      
    }

    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection + 50;
    } else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection + 50;


    } else if (jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection + 50;


    } else if (swordGroup.isTouching(boy)) {
        cashG.destroy;
        diamondsG.destroy;
        jwelleryG.destroy;
        gameState = END
      
    }
    if (gameState == END) {
      go.visible = true
      boy.changeAnimation("gameoverimage", go1);
    }

    drawSprites();
    textSize(20);
    fill(255);
    text("Treasure: " + treasureCollection, width / 2 + 50, height - 590 );
  }

}

function createCash() {
  if (World.frameCount % 100 == 0) {
    var cash = createSprite(Math.round(random(50, width), 40, 10, 10));
    cash.addImage(cashImg);
    cash.scale = 0.12;
    cash.velocityY = 3;
    cash.lifetime = height * 400;
    cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 120 == 0) {
    var diamonds = createSprite(Math.round(random(50, width), 40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale = 0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = height * 400;
    diamondsG.add(diamonds);
  }
}

function createJwellery() {
  if (World.frameCount % 210 == 0) {
    var jwellery = createSprite(Math.round(random(50, width), 40, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale = 0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = height * 400;
    jwelleryG.add(jwellery);
  }
}

function createSword() {
  if (World.frameCount % 130 == 0) {
    var sword = createSprite(Math.round(random(50, width), 40, 10, 10));
    sword.addImage(swordImg);
    sword.scale = 0.1;
    sword.velocityY = 3;
    sword.lifetime = height * 400;
    swordGroup.add(sword);
  }
}