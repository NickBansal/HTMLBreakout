var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Draw a rectangle
ctx.beginPath();
ctx.rect(0, 300, 80, 20);
ctx.fillStyle = "#FFEECC";
ctx.fill();
ctx.closePath();