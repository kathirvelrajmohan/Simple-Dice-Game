// player 1
var randomnum1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice"+randomnum1+".png";

var image1  = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

// player 2
var randomnum2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice"+randomnum2+".png";

var image2  = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

// player 3
var randomnum3 = Math.floor(Math.random() * 6) + 1;

var randomImage3 = "images/dice"+randomnum3+".png";

var image3  = document.querySelectorAll("img")[2];
image3.setAttribute("src",randomImage3);

// player 4
var randomnum4 = Math.floor(Math.random() * 6) + 1;

var randomImage4 = "images/dice"+randomnum4+".png";

var image4  = document.querySelectorAll("img")[3];
image4.setAttribute("src",randomImage4);

let maxNumber = Math.max(randomnum1, randomnum2, randomnum3, randomnum4);
let winners = [];

if (randomnum1 === maxNumber) winners.push('Player 1');
if (randomnum2 === maxNumber) winners.push('Player 2');
if (randomnum3 === maxNumber) winners.push('Player 3');
if (randomnum4 === maxNumber) winners.push('Player 4');

let winnerDisplay = document.getElementById("winnerDisplay");

if (winners.length === 1) {
    winnerDisplay.textContent = winners[0] + " is the winner!";
} else {
    winnerDisplay.textContent = "It's a tie between: " + winners.join(' and ');    
}