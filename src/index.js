const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


let playerImg = new Image();
playerImg.src = "src/player-plane.png";

let obstaculoImagen = new Image();
obstaculoImagen.src = "src/enemy-plane.png";

const obstaculos = [];

const player = new Objeto(250, 0, 90, 90, playerImg, ctx);

const jugar = () => {
  for (let obstaculo of obstaculos) {
    obstaculo.borrar();
    obstaculo.y -= 5;
    obstaculo.dibujar();
    if (player.detectarColision(obstaculo)) {
      //alert('Game Over');
    }
  }
};

const crearObstaculos = () => {
  const randomPositionX = Math.floor(Math.random() * 480);
  const obstaculo = new Objeto(
    randomPositionX,
    670,
    70,
    90,
    obstaculoImagen,
    ctx
  );
  obstaculos.push(obstaculo);
};

const screenLoad = () => {
  player.dibujar();
  setInterval(jugar, 100);
  setInterval(crearObstaculos, 5000);
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
  if (e.key === "Space"){
    disparo = true;
  } console.log("Disparo")
  player.dibujar();
};

window.addEventListener("load", screenLoad);

window.addEventListener("keydown", moverPlayer);
