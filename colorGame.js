var numSquares = 6
var array = [];
var pickedColor;

var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

// var easy = document.querySelector("#easy");
// var hard = document.querySelector("#hard");


// easy.addEventListener("click", function () {
//     numSquares = 3;
//     newGame(numSquares);
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
// })
//
// hard.addEventListener("click",function () {
//     numSquares = 6;
//     newGame(numSquares);
//     hard.classList.add("selected");
//     easy.classList.remove("selected");
// })




init();

reset.addEventListener("click", function() {
    newGame(numSquares);
})

function init() {

    setupModeButtons();
    setupSquares();
    newGame(numSquares);

}

function setupModeButtons() {
    // mode button event listeners
    for(var i=0;i<mode.length;i++) {
        mode[i].addEventListener("click",function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            newGame(numSquares);
        })
    }
}

function setupSquares() {
    for(var i=0;i<square.length;i++) {
        // square[i].style.backgroundColor = array[i];    //we do not need this now as we are running newGame function in the starting

        square[i].addEventListener("click",function () {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                changeColor();
                messageDisplay.textContent = "Correct!"
                h1.style.backgroundColor = pickedColor;
                reset.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        } )
    }
}


function changeColor() {
    for(var i = 0;i<square.length;i++) {
        square[i].style.backgroundColor = pickedColor;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * array.length)  //.floor converts a decimal into an integer and .random generates random num between 0 and 1
    return array[random]
}

function generateRandomColor(num) {
    var newArr = [];

    for(var i =0; i<num; i++) {
        newArr[i] = randomColor();
    }

    return newArr;
}

function randomColor() {
    //genrate each colour between 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function newGame(num) {
    //generate new colors
    array = generateRandomColor(num);
    //pick a new color
    pickedColor = pickColor();
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    //change h1 background
    h1.style.backgroundColor = "steelblue";
    //update square colors
    for(var i=0;i<6;i++) {
        if(array[i]) {
            square[i].style.backgroundColor = array[i];
            square[i].style.display = "block";
        }
        else
            square[i].style.display = "none";
    }
    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
}
