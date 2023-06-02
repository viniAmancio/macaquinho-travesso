class Jogador {
    constructor() {
      this.imagem = loadImage("jogo/img_jogo/macaco.png");
      this.posX = 270;
      this.posY = 310;
      this.vel = 7;
      this.lag = 60;
      this.alt = 60;
      //atributos do jogador
    }
  
    mova() {
      // definindo que a imagem deve ter esses parâmetros
      image(this.imagem, this.posX, this.posY, this.lag, this.alt);
  
      // 37 = Seta para esquerda.
      if (keyIsDown(37) && this.xInicial > 0) {
        this.posX -= this.vel;
      }
  
      //O número 39(seta para direita)
      if (keyIsDown(39) && this.xFinal < 600) {
        this.posX += this.vel;
      }
  
      // para saber a distancia do personagem ate as bordas
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.alt;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.lag;
    }
  }