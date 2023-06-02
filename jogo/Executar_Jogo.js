function Executar_jogo(){


background(floresta);
jogador.mova();

//for é quem faz o ciclo
for (let i = 0; i < frutas.length; i++) {
  frutas[i].mova();

  //Cria uma nova fruta após passar do limite indicado
  if (frutas[i].posY > 400) {
    frutas[i] = new Frutas();
  }
  //Colisão do personagem
  if (
    jogador.xInicial < frutas[i].xFinal &&
    jogador.xFinal > frutas[i].xInicial &&
    jogador.yInicial < frutas[i].yFinal &&
    jogador.yFinal > frutas[i].yInicial
  ) {
    //Verifica se "i" é a imagem 4
    if (frutas[i].imagem == img_frutas[4]) {
      //som
      cobra_sound.play();
      pontos = 0;
      frutas[i] = new Frutas();
      life --;
       /*
      life -=1
      life = life -1
      */

      if(life == 0){
        
        tela_gameover = "MORTE";
      } 
      }
    }

    //aumentar a velocidade
    else {
      fruta_sound.play();
      frutas[i] = new Frutas();
      frutas[i].velocidade += 0.5;
      pontos += 1;
     

    }
    frutas[i] = new Frutas();
  }
}
//Contagem dos pontos

textSize(20);
text("Pontos: " + pontos, 50, 40);

// A cada 5 pontos a velociade é aumentada
if (pontos == 10) {
  frutas.velocidade += 1;

  if (pontos == 15) {
    frutas.velocidade += 0.1;

    if (pontos == 20) {
      frutas.velocidade += 0.1;

      if (pontos == 25) {
        frutas.velocidade += 0.1;

        if (pontos == 30) {
          frutas.velocidade += 0.1;

          if (pontos == 35) {
            frutas.velocidade += 0.1;

            if (pontos == 40) {
              frutas.velocidade += 0.1;
            }
          }
        }
      }
    }
  }
}
