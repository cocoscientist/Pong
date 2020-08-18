var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 360;
canvas.style.backgroundColor = "black";
document.body.appendChild(canvas);

//constants for the game
const paddleHeight = 80;
const paddleWidth = 15;
const dy = 2.85;

//score for players
var score = {
    p1 = 0,
    p2 = 0
};

//storing events
var events = {};
addEventListener("keydown",function(e){
    events[e.keyCode]=true;
},false);
addEventListener("keyup",function(e){
    delete events[e.keyCode];
},false);

var ball = {
    x = 240,
    y = 1 + (Math.random()*358),
    Xmag = 1.5,
    Ymag = 1
};

var player1 = {
    x = 30,
    y = 240
};

var player1 = {
    x = 435,
    y = 240
};