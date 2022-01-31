//*GLOBAL VARIABLES
var canvas = document.querySelector(".canvas");
var canvasPosition = canvas.getBoundingClientRect();
var color = document.querySelector("#color-input").value;
var context = canvas.getContext("2d");
var painting = false;
var penWidth = document.querySelector("#pen-width").value;
var screenWidth = window.innerWidth;
var xMouse, yMouse = 0;

//*CANVAS WIDTH CONFIGURATION
var canvasWidth = (screenWidth/100) * 90;
canvas.style.width = canvasWidth + "px";
canvas.setAttribute("width",canvasWidth);

//*COLOR CONFIGURATION
document.querySelector("#color-input").addEventListener("change", function(){
    color = this.value;
});

//*DRAWING STUFF
canvas.addEventListener("mousedown",(e) => {
    paintStart(e);
}, false);
// canvas.addEventListener("touchstart",(e) => {
//     paintStart(e);
// }, false);
function paintStart(e){
    xMouse = e.offsetX;
    yMouse = e.offsetY;
    painting = true;
    draw(xMouse, yMouse, xMouse+1, yMouse+1);
}

canvas.addEventListener("mousemove", (e) => {
    paintMove(e);
}, false);
// canvas.addEventListener("touchmove", (e) => {
//     paintMove(e);
// }, false);
function paintMove(e){
    if(painting === true){
        draw(xMouse, yMouse, e.offsetX, e.offsetY);
        xMouse = e.offsetX;
        yMouse = e.offsetY;
    }
}

document.addEventListener("mouseup",(e) => {
    paintStop(e);
}, false);
// document.addEventListener("touchend",(e) => {
//     paintStop(e);
// }, false);
function paintStop(e){
    xMouse = e.offsetX;
    yMouse = e.offsetY;
    painting = false;
}

function draw(x1,y1,x2,y2){
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = penWidth;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}

//*PEN WIDTH CONFIGURATION
document.querySelector("#pen-width").addEventListener("change", function(){
    penWidth = this.value;
});

