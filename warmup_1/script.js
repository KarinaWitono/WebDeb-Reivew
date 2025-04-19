

var button = document.getElementById("button-1");

var canvas = document.getElementById('canvas-1');
var ctx = canvas.getContext('2d');
var heading = document.getElementById('heading-1')
var colors = "red"; 

canvas.width = 150;
canvas.height = 150;

ctx.beginPath();
ctx.fillStyle = colors;
ctx.fillRect(75, 75, 50, 30);
ctx.closePath();

button.onclick = background;

function background () {
    heading.innerHTML = 'Used as the title of a project';
    rectangle()
}

function rectangle () {
    colors = "blue";
    ctx.fillStyle = colors;
    ctx.fillRect(75, 75, 50, 30);
}