const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


let playerImg = new Image();
playerImg.src = "src/player.png";
let obstaculoImagen = new Image();
obstaculoImagen.src = "src/meteor.png";
let obstaculo2Imagen = new Image();
obstaculo2Imagen.src = "src/meteor2.png"
let obstaculo3Imagen = new Image();
obstaculo3Imagen.src = "/src/llave.png"
let obstaculo4Imagen = new Image();
obstaculo4Imagen.src = "/src/IH.png"


let gameOver1 = document.getElementById("gameOver");
let reset = document.getElementById("reset");

let animacionDeJugar
let animacionDeJugar2

function gameOver() {
  gameOver1.style.display = 'block';
  reset.style.display = 'block';
  clearInterval(animacionDeJugar)
  clearInterval(animacionDeJugar2);
}

const obstaculos = [];
let llaveArray = [];
let ironhackArr = [];

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
  for (let llave of llaveArray) {
    llave.borrar();
    llave.y -= 5;
    llave.dibujar();
    if (player.detectarColision(llave)) {
      scores += 100;
      scoreEl.innerHTML = scores
      llaveArray.shift();
      llave.borrar();
    }
  }
  for (let iron of ironhackArr) {
    iron.borrar();
    iron.y -= 5;
    iron.dibujar();
    if (player.detectarColision(iron)) {
      scores += 1000;
      scoreEl.innerHTML = scores
      ironhackArr.shift();
      iron.borrar();
    }
  }

};  

const crearObstaculos4 = () => {
  const randomPositionX = Math.floor(Math.random() * 180);
  const iron = new Objeto(
    randomPositionX,
    770,
    60,
    80,
    obstaculo4Imagen,
    ctx
  );
  ironhackArr.push(iron);
};


const crearObstaculos3 = () => {
  const randomPositionX = Math.floor(Math.random() * 180);
  const llave = new Objeto(
    randomPositionX,
    770,
    60,
    80,
    obstaculo3Imagen,
    ctx
  );
  llaveArray.push(llave);
};


const crearObstaculos2 = () => {
  const randomPositionX = Math.floor(Math.random() * 280);
  const obstaculo = new Objeto(
    randomPositionX,
    770,
    60,
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
    60,
    90,
    obstaculoImagen,
    ctx
  );
  obstaculos.push(obstaculo);
};

const screenLoad = () => {
  player.dibujar();
  animacionDeJugar, animacionDeJugar2 = setInterval(jugar, 20);
  setInterval(crearObstaculos, 3500);
  setInterval(crearObstaculos, 8000);
  setInterval(crearObstaculos2, 6000);
  setInterval(crearObstaculos2, 5000);
  setInterval(crearObstaculos3, 5000);
  setInterval(crearObstaculos4, 15000);
};

const moverPlayer = (e) => {
  player.borrar();
  
  if (e.key === "ArrowLeft") {
    player.x -= 15;
  }
  if (e.key === "ArrowRight") {
    player.x += 15;
  }
  if (e.key === "ArrowUp") {
    player.y -= 15;
  }
  if (e.key === "ArrowDown") {
    player.y += 15;
  }
  
  player.dibujar();
};

let scoreEl = document.getElementById("setscorenum");
let scores = 0;


/* function scoreNum () {

  if (player.detectarColision(crearObstaculos3)){
    scores += 100;
    scoreEl.innerHTML = scores
    console.log("scoreNum")
  } 
  
  } */
  

window.addEventListener("load", screenLoad);

window.addEventListener("keydown", moverPlayer);
