// document.querySelector("button").addEventListener("click", handleClick); // one-liner
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", handleClick);
}

// document.querySelector("button").addEventListener("click", function () {
// anon function
//   alert("I got clicked!");
// });

function handleClick() {
  this.style.color = "white"; // change text color to white
  console.log(this.innerHTML); // will print out the letters
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
