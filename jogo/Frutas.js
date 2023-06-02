class Frutas {
    constructor() {
      this.imagem = img_frutas[int(random(0, 4.9))];
      this.posX = random(10, 560);
      this.posY = 10;
      this.vel = random(1, 5);
      this.lag = 50;
      this.alt = 50;
    }
  
    mova() {
      image(this.imagem, this.posX, this.posY, this.lag, this.alt);
      this.posY += this.vel;
  
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.alt;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.lag;
    }
  }
  