function wasClicked() {
    alert("I got a click!");
}

var buttons = document.querySelectorAll("button");
var arrayLength = buttons.length;
for (var i=0; i<arrayLength; i++){
    buttons[i].addEventListener("click",function (){alert("I got a click!")})
}