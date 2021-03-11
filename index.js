// document.querySelector("button").addEventListener("click", handleClick);
var drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", handleClick);
}

// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");
// });

function handleClick() {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}
