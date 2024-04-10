function wasClicked() {
    alert("I got a click!");
}

function playSound(){
    var sound1 = new Audio("./sounds/tom-1.mp3");
    sound1.play();
}

var buttons = document.querySelectorAll(".drum");
var arrayLength = buttons.length;
for (var i=0; i<arrayLength; i++){
    buttons[i].addEventListener("click", playSound)
}