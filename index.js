var drumButtons = document.querySelectorAll(".drum"); // query all buttons with class 'drum'

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", handleClick); // add an event listener to drum buttons
}

function handleClick() {
  this.style.color = "white";
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
