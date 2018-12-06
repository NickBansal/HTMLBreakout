var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height/2; 
let ballRadius = 10;
let dx = -2;
let dy = -2;
let paddleHeight = 20;
let paddleWidth = 80;
let paddleX = (canvas.width-paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;

const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#CCCCCC";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) dx = -dx;
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
        }
    }
}

const drawRectangle = () => {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
    ctx.fillStyle = "#FFEECC";
    ctx.fill();
    ctx.closePath();
    if (rightPressed && paddleX < canvas.width-paddleWidth) paddleX += 7;
    if (leftPressed && paddleX > 0) paddleX -= 7;
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawRectangle();
}

const keyDownHandler = (e) => {
    if (e.keyCode == 39) rightPressed = true
    else if (e.keyCode == 37) leftPressed = true;
}

const keyUpHandler = (e) => {
    if (e.keyCode == 39) rightPressed = false
    else if (e.keyCode == 37) leftPressed = false;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
setInterval(draw, 10);
