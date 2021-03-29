const victoryColor = "#9ACD32"

function isFree(button)
{
    return button.innerHTML.length == 0;
}

function isDraw(buttons)
{
    var isDrawVar = true;
    buttons.forEach(btn => {
        if (isFree(btn)) {
            isDrawVar = false;
        }
    })
    return isDrawVar;
}

function isHorizontalWin(buttons, symbol)
{
    if (buttons[0].innerHTML === symbol && buttons[1].innerHTML === symbol && buttons[2].innerHTML === symbol) {
        buttons[0].style.backgroundColor = victoryColor;
        buttons[1].style.backgroundColor = victoryColor;
        buttons[2].style.backgroundColor = victoryColor;
        return true;
    }
    if (buttons[3].innerHTML == symbol && buttons[4].innerHTML == symbol && buttons[5].innerHTML == symbol) {
        buttons[3].style.backgroundColor = victoryColor;
        buttons[4].style.backgroundColor = victoryColor;
        buttons[5].style.backgroundColor = victoryColor;
        return true;
    }
    if (buttons[6].innerHTML == symbol && buttons[7].innerHTML == symbol && buttons[8].innerHTML == symbol) {
        buttons[6].style.backgroundColor = victoryColor;
        buttons[7].style.backgroundColor = victoryColor;
        buttons[8].style.backgroundColor = victoryColor;
        return true;
    }
    return false;
}

function isVerticalWin(buttons, symbol)
{
    if (buttons[0].innerHTML === symbol && buttons[3].innerHTML === symbol && buttons[6].innerHTML === symbol){
        buttons[0].style.backgroundColor = victoryColor;
        buttons[3].style.backgroundColor = victoryColor;
        buttons[6].style.backgroundColor = victoryColor;
        return true;
    }
    if (buttons[1].innerHTML == symbol && buttons[4].innerHTML == symbol && buttons[7].innerHTML == symbol) {
        buttons[1].style.backgroundColor = victoryColor;
        buttons[4].style.backgroundColor = victoryColor;
        buttons[7].style.backgroundColor = victoryColor;
        return true;
    }
    if (buttons[2].innerHTML == symbol && buttons[5].innerHTML == symbol && buttons[8].innerHTML == symbol) {
        buttons[2].style.backgroundColor = victoryColor;
        buttons[5].style.backgroundColor = victoryColor;
        buttons[8].style.backgroundColor = victoryColor;
        return true;
    }
    return false;
}

function isDiagonalWin(buttons, symbol)
{
    if (buttons[0].innerHTML === symbol && buttons[4].innerHTML === symbol && buttons[8].innerHTML === symbol) {
        buttons[0].style.backgroundColor = victoryColor;
        buttons[4].style.backgroundColor = victoryColor;
        buttons[8].style.backgroundColor = victoryColor;
        return true;
    }
    if (buttons[2].innerHTML == symbol && buttons[4].innerHTML == symbol && buttons[6].innerHTML == symbol) {
        buttons[2].style.backgroundColor = victoryColor;
        buttons[4].style.backgroundColor = victoryColor;
        buttons[6].style.backgroundColor = victoryColor;
        return true;
    }
    return false;
}

function isVictory(buttons, informationBox, symbol)
{
    if (isHorizontalWin(buttons, symbol)) {
        informationBox.innerHTML = `The player ${symbol} win! <br><a href=\"TicTacToe.html\">Play again</a>`
        return true;
    }
    if (isVerticalWin(buttons, symbol)) {
        informationBox.innerHTML = `The player ${symbol} win! <br><a href=\"TicTacToe.html\">Play again</a>`
        return true;
    }
    if (isDiagonalWin(buttons, symbol)) {
        informationBox.innerHTML = `The player ${symbol} win! <br><a href=\"TicTacToe.html\">Play again</a>`
        return true;
    }
    return false;
}

function checkEndGame(buttons, informationBox, symbol)
{
    if (isVictory(buttons, informationBox, symbol))
        return (true);
    if (isDraw(buttons)) {
        informationBox.innerHTML = "Draw try again ? <br><a href=\"TicTacToe.html\">Yes</a>"
        return true;
    }
    return false;
}

function main()
{
    var buttons = document.querySelectorAll(".button-game");
    var informationBox = document.querySelector(".game-information");
    var isGameOver = false;
    var turn = 2;
    var playerSymbol = ["X", "O"];

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (isGameOver) {
                informationBox.innerHTML = "The game is Over ! <br><a href=\"TicTacToe.html\">Play again</a>";
                return;
            }
            
            if (isFree(button)) {
                button.innerHTML = playerSymbol[turn % 2];
                turn += 1;
                informationBox.innerHTML = "Player \"" + playerSymbol[turn % 2] + "\" turn !";
            } else {
                informationBox.innerHTML = "Wrong place still <br>\"" + playerSymbol[turn % 2] + "\" turn";
            }
            isGameOver = checkEndGame(buttons, informationBox, playerSymbol[(turn - 1) % 2]);
        });
    })
}

main();