1// Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

// Raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 60; // Adicionei alturaRaquete porque não estava definido
let velocidadeYRaquete = 10; // Adicionei a velocidade da raquete

// Raquete do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 5;
let pontosDoOponente = 0;
let meusPontos = 0;

function setup() {
  createCanvas(600, 400); // Tamanho da tela
}

function draw() {
  background("green"); // Cor do fundo
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  colisaoMinhaRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  colisaoRaqueteOponente();
  incluirPlacar();
  marcaPonto();
}

function mostraBolinha() {
  fill("red"); // Cor da bolinha
  stroke('black'); // Contorno
  circle(xBolinha, yBolinha, diametro); // Desenha a bolinha
}

function movimentoBolinha() {
  xBolinha += velocidadeXBolinha; // Movimenta a bolinha
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1; // Bate e volta
  }
  if (yBolinha > height || yBolinha < 0) {
    velocidadeYBolinha *= -1; // Bate e volta
  }
}

function mostraRaquete() {
  fill("blue"); // Cor da raquete
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(38)) { // Seta para cima
    yRaquete -= 10;
  }
  if (keyIsDown(40)) { // Seta para baixo
    yRaquete += 10;
  }
}

function movimentaMinhaRaqueteComMouse() {
  if (mouseIsPressed) {
    yRaquete = mouseY;
  }
}

function colisaoMinhaRaquete() {

    xRaquete, yRaquete,
    larguraRaquete, alturaRaquete,
    xBolinha, yBolinha,
    diametro
;
 
    velocidadeXBolinha *= -1;
  }


function mostraRaqueteOponente() {
  fill("yellow"); // Cor da raquete do oponente
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}

function movimentaRaqueteOponente() {
  if (keyIsDown(87)) { // Tecla W
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) { // Tecla S
    yRaqueteOponente += 10;
  }
}

function movimentaRaqueteOponenteAutomatico() {
  let velocidadeYOponente = (yBolinha - yRaqueteOponente - alturaRaquete / 2) * 0.1;
  yRaqueteOponente += velocidadeYOponente;
}

function colisaoRaqueteOponente() {

    xRaqueteOponente, yRaqueteOponente,
    larguraRaquete, alturaRaquete,
    xBolinha, yBolinha,
    diametro
  
  
    velocidadeXBolinha *= -1;
  }


function incluirPlacar() {
  fill(color(255, 140, 0));
  rect(183, 11, 40, 20);
  fill(255);
  text(meusPontos, 200, 26);
  fill(color(255, 140, 0));
  rect(383, 11, 40, 20);
  fill(255);
  text(pontosDoOponente, 400, 26);
}

function marcaPonto() {
  if (xBolinha > 600) {
    meusPontos += 1;
    xBolinha = width / 2;
    yBolinha = height / 2;
    velocidadeXBolinha *= -1;
  }
  if (xBolinha < 0) {
    pontosDoOponente += 1;
    xBolinha = width / 2;
    yBolinha = height / 2;
    velocidadeXBolinha *= -1;
  }
}
