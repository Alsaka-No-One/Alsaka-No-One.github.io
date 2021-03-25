'use strict';

var canvas;
var game;

const PLAYER_VERTICAL = 100
const PLAYER_SIZE = 5

function playerMove(event) {
    var mapLocation = canvas.getBoundingClientRect();
    var mouse = event.clientY - mapLocation.y;

    if (mouse < PLAYER_VERTICAL / 2) {
        game.player.y = 0;
    } else if (mouse > canvas.height - PLAYER_VERTICAL / 2) {
        game.player.y = canvas.height - PLAYER_VERTICAL;
    } else {
        game.player.y = mouse - PLAYER_VERTICAL / 2;
    }
}

function computerMove() {
    game.computer.y += game.ball.speed.y * 0.75;
}

function draw() {
    var context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = 'white';
    context.beginPath();
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();

    context.fillStyle = "white";
    context.fillRect(0, game.player.y, PLAYER_SIZE, PLAYER_VERTICAL);
    context.fillRect(canvas.width - PLAYER_SIZE, game.computer.y, PLAYER_SIZE, PLAYER_VERTICAL);

    context.beginPath();
    context.fillStyle = 'red';
    context.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2, false);
    context.fill();
}

function ballMove()
{
    if (game.ball.y > canvas.height || game.ball.y < 0) {
        game.ball.speed.y *= -1;
    }

    if (game.ball.x > canvas.width - PLAYER_SIZE) {
        collide(game.computer);
    } else if (game.ball.x < PLAYER_SIZE) {
        collide(game.player);
    }

    game.ball.x += game.ball.speed.x;
    game.ball.y += game.ball.speed.y;
}

function collide(player) {
    if (game.ball.y < player.y || game.ball.y > player.y + PLAYER_VERTICAL) {
        game.ball.x = canvas.width / 2;
        game.ball.y = canvas.height / 2;
        game.player.y = canvas.height / 2 - PLAYER_VERTICAL / 2;
        game.computer.y = canvas.height / 2 - PLAYER_VERTICAL / 2;        
        game.ball.speed.x = 2;
        if (player == game.player) {
            game.computer.score++;
            document.querySelector('#computer-score').textContent = game.computer.score;
        } else {
            game.player.score++;
            document.querySelector('#player-score').textContent = game.player.score;
        }        
    } else {
        game.ball.speed.x *= -1.2;
        changeDirection(player.y);
    }
}

function changeDirection(playerPosition) {
    var impact = game.ball.y - playerPosition - PLAYER_VERTICAL / 2;
    var ratio = 100 / (PLAYER_VERTICAL / 2);
    // Get a value between 0 and 10
    game.ball.speed.y = Math.round(impact * ratio / 10);
}

function gameplay() {
    draw();
    computerMove();
    ballMove();
    requestAnimationFrame(gameplay);
}

document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementById('canvas');
    game = {
        player: {
            y: canvas.height / 2 - PLAYER_VERTICAL / 2,
            score: 0
        },
        computer: {
            y: canvas.height / 2 - PLAYER_VERTICAL / 2,
            score: 0
        },
        ball: {
            x: canvas.width / 2,
            y: canvas.height / 2,
            r: 5,
            speed: {
                x: 2,
                y: 2
            }
        }
    }
    canvas.addEventListener('mousemove', playerMove);
    draw();
    gameplay();
});