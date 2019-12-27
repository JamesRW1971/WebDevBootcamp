var p1Button = document.querySelector("#p1");
var p1score = 0;
var p1Display = document.querySelector("#p1Display");

var p2Button = document.getElementById("p2");
var p2score = 0;
var p2Display = document.getElementById("p2Display");


var numinput = document.querySelector("input");
var winScoreDisplay = document.querySelector("#score2win");

var gameover = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if (!gameover)
    {
        p1score++;
        p1Display.textContent = p1score;
        if (p1score === winningScore)
        {
            gameover = true;
            p1Display.classList.add("winner");
        }
    }
});

p2Button.addEventListener("click", function(){
    if (!gameover)
    {
        p2score++;
        p2Display.textContent = p2score;
        if (p2score === winningScore)
        {
            gameover = true;
            p2Display.classList.add("winner");
        }
    }
});

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);

function reset()
{
    p1score =0;
    p1Display.textContent = p1score;
    if (p1Display.classList.contains("winner"))
    {
        p1Display.classList.remove("winner");
    }

    p2score =0;
    p2Display.textContent = p2score;
    if (p2Display.classList.contains("winner"))
    {
        p2Display.classList.remove("winner");
    }

    gameover = false;

}
numinput.addEventListener("change", function()
{
    winScoreDisplay.textContent = numinput.value;
    winningScore = Number(numinput.value);
    reset();
});