console.log('Hello World')

var button = document.getElementById("button-1");

var canvas = document.getElementById('canvas-1');
var ctx = canvas.getContext('2d');

canvas.width = 150;
canvas.height = 150;

ctx.beginPath()
ctx.fillStyle = "blue";
ctx.fillRect(75, 75, 50, 30);
ctx.closePath()