// As variáveis são escritas em minúscula, já as classes, são escritas
//com a primeira letra Maiúscula

let floresta;
let frutas = [];
let img_frutas = [];
let obstaculo;
let joagador;
let pontos = 0;
let fruta_sound;
let cobra_sound;
let tela_arbetura;
let tela_abertura = "ABERTURA"
let tela_gameover = "MORTE"
let life = 3;

// Function preload está carregando  as imagens
function preload() {
  tela_arbetura = loadImage("jogo/img_jogo/abertura.gif");
  tela_gameover = loadImage("jogo/img_jogo/game_over.gif");

  floresta = loadImage("jogo/img_jogo/fundo_floresta.jpg");


  fruta_sound = loadSound("sounds/monkey_sound.mp3");
  cobra_sound = loadSound("sounds/cobra_sound.mp3");

  img_frutas[0] = loadImage("jogo/img_jogo/banana.png");
  img_frutas[1] = loadImage("jogo/img_jogo/cacho_banana.png");
  img_frutas[2] = loadImage("jogo/img_jogo/manga.png");
  img_frutas[3] = loadImage("jogo/img_jogo/mix.png");
  img_frutas[4] = loadImage("jogo/img_jogo/cobra.png");

  // Criar um novo jogador(novo objeto).
  jogador = new Jogador();

  frutas[0] = new Frutas(200);
  frutas[1] = new Frutas(300);
  frutas[2] = new Frutas(250);
  frutas[3] = new Frutas(350);
  frutas[4] = new Frutas(290);
}




function setup() {
  createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
  if(keyCode == 13){
    tela_abertura = "JOGO";
  }
}

function draw() {

  if(tela_abertura == "ABERTURA"){
  msAbertura();
}else{
  Executar_jogo();

}
  function mouseClicked() {
    tela_arbetura = "JOGO";
  }

  if(tela_gameover == "MORTE")
    Game_Over();
}