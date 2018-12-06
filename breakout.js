var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Draw a rectangle
ctx.beginPath();
ctx.rect(0, 300, 80, 20);
ctx.fillStyle = "#FFEECC";
ctx.fill();
ctx.closePath();

// Draw a Circle
ctx.beginPath();
ctx.arc(240, 160, 10, 0, Math.PI*2, false);
ctx.fillStyle = "#CCCCCC";
ctx.fill();
ctx.closePath();