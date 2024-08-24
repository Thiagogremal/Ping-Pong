//Variaveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let colidiu = false;

//Variaveis minhas
let x1Raq = 5;
let y1Raq = 150;
let compRaq = 10;
let altRaq = 98;
let meusPontos = 0;

//sons do jogo
let ponto;
let raquetada;
let trilha;
let chanceDeErrar = 0;

function preload()
{
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

//Variaveis Oponente
let x2Raq = 585;
let y2Raq = 150;
let velocidadeYOponente;
let pontosDoOponente = 0;

//Velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

function setup() {
  createCanvas(600, 400);
  
  trilha.loop();
  
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  mostraRaquete(x1Raq,y1Raq);
  mostraRaquete(x2Raq,y2Raq);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(x1Raq, y1Raq);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(x2Raq, y2Raq);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  
  xBolinha += velocidadeXBolinha;
  yBolinha +=  velocidadeYBolinha;
  
  if((xBolinha > width-(raio)) || (xBolinha < 0  +(diametro/2))){
     velocidadeXBolinha *= -1;
         }
  
  if((yBolinha > height-(raio)) || (yBolinha < 0 +(diametro/2))){
     velocidadeYBolinha *= -1;
     }
}
 
function mostraRaquete(x,y){
  
  rect(x, y, compRaq, altRaq);
}  


function movimentaMinhaRaquete(){
    
  if (keyIsDown(UP_ARROW)){
    y1Raq -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    y1Raq += 10;
  }
  
  y1Raq = constrain(y1Raq, 10, 310);
}
  
function verificaColisaoRaquete(){
  if(xBolinha - raio < x1Raq + compRaq && yBolinha - raio < y1Raq + altRaq && yBolinha + raio > y1Raq){
    velocidadeXBolinha *= -1;
    raquetada.play("");
     }
  
  
}  
  
function verificaColisaoRaquete(x,y) {
    colidiu = collideRectCircle(x, y, compRaq, altRaq, xBolinha, yBolinha, raio);
  
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  
}

function movimentaRaqueteOponente(){
  
  if (keyIsDown(87)){
    y2Raq -= 10;
  }
  
  if (keyIsDown(83)){
    y2Raq += 10;
  }
  
  y1Raq = constrain(y1Raq, 10, 310);
}


function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170,26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470,26);
  
}

function marcaPonto(){
  
  if (xBolinha > width-(raio)) {
        meusPontos += 1;
    ponto.play();
    }
    if (xBolinha < 0 +(diametro/2)) {
        pontosDoOponente += 1;
       ponto.play();
    }
  
  /*if(xBolinha > width-(raio)){
     meusPontos++;
  }
  else if(xBolinha < 0 +(diametro/2)){
    pontosDoOponente++;
          }*/
    
}
  


