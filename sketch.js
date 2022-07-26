var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var coin,coin2;
var coinI,coinI2;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png");

  coinI = loadImage("coin.png");

  coinI2 = loadImage("coin.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
path = createSprite(200,200,40,400);
//adicione uma imagem para a pista
path.addImage("path",pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
boy = createSprite (200,350,5,5);
//adicione uma animação de corrida para ele
boy.addAnimation("boyImg",boyImg);
boy.scale=0.8;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
coin = createSprite(310,200,30,30);
coin.addImage("coinI",coinI);
coin.scale= 0.5;

coin2 = createSprite(110,10,30,30)
coin2.addImage("coinI2",coinI2);
coin2.scale = 0.5;

}

function draw() {
  background(0);
  path.velocityY = 26;
  coin.velocityY = 26;
  coin2.velocityY= 26;

  // mover o menino com o mouse usando mouseX
boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  leftBoundary.visible = false;
  rightBoundary.visible = false;

  //código para redefinir o fundo
  if(path.y > 600 ){
    path.y = height/20;
  }

  if(coin.y > 1600 ){
    coin.y = height/20;
  }
  if(coin2.y > 1000 ){
    coin2.y = height/20;
  }

  if(boy.isTouching(coin)){
  coin.y = 500;
  }
  if(boy.isTouching(coin2)){
    coin2.y = 500;
      }
    

  drawSprites();;
}
