const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


let playerImg = new Image();
playerImg.src = "src/player.png";
let obstaculoImagen = new Image();
obstaculoImagen.src = "src/meteor.png";
let obstaculo2Imagen = new Image();
obstaculo2Imagen.src = "src/meteor2.png"


let gameOver1 = document.getElementById("gameOver"); 

let animacionDeJugar

function gameOver() {
  gameOver1.style.display = 'block';
  clearInterval(animacionDeJugar);
}

const obstaculos = [];

const player = new Objeto(250, 0, 90, 90, playerImg, ctx);

const jugar = () => {
  for (let obstaculo of obstaculos) {
    obstaculo.borrar();
    obstaculo.y -= 5;
    obstaculo.dibujar();
    if (player.detectarColision(obstaculo)) {
      gameOver();
    }
  }
};



const crearObstaculos2 = () => {
  const randomPositionX = Math.floor(Math.random() * 280);
  const obstaculo = new Objeto(
    randomPositionX,
    770,
    70,
    80,
    obstaculo2Imagen,
    ctx
  );
  obstaculos.push(obstaculo);
};

const crearObstaculos = () => {
  const randomPositionX = Math.floor(Math.random() * 480);
  const obstaculo = new Objeto(
    randomPositionX,
    770,
    70,
    90,
    obstaculoImagen,
    ctx
  );
  obstaculos.push(obstaculo);
};

const screenLoad = () => {
  player.dibujar();
  animacionDeJugar = setInterval(jugar, 50);
  setInterval(crearObstaculos, 3500);
  setInterval(crearObstaculos2, 6000)
};

const moverPlayer = (e) => {
  player.borrar();
  
  if (e.key === "ArrowLeft") {
    player.x -= 5;
  }
  if (e.key === "ArrowRight") {
    player.x += 5;
  }
  if (e.key === "ArrowUp") {
    player.y -= 5;
  }
  if (e.key === "ArrowDown") {
    player.y += 5;
  }
  
  player.dibujar();
};

window.addEventListener("load", screenLoad);

window.addEventListener("keydown", moverPlayer);