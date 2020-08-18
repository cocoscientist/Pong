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
    Ymag = 1,
    radius = 10
};

//Player 1
var player1 = {
    x = 30,
    y = 240
};

//Player 2
var player2 = {
    x = 435,
    y = 240
};

function keyEvents(){
    if(87 in events){
        player1.y -= (player1.y<=0.001?0:dy);
    }else if(83 in events){
        player1.y += (player1.y>=359.999?0:dy);
    }

    if(38 in events){
        player2.y -= (player2.y<=0.001?0:dy);
    }else if(40 in events){
        player2.y += (player2.y>=359.999?0:dy);
    }
}

//Update function
function update(){
    keyEvents();
    if(ball.y < ball.radius || ball.y > canvas.height - ball.radius){
        ball.Ymag *= -1;
    }
    
    ball.x += ball.Xmag;
    ball.y += ball.Ymag;

}

//draw function
function draw(){

}