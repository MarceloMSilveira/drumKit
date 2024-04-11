function wasClicked() {
    alert("I got a click!");
}

function playSound(caminhoToSound){
    var sound1 = new Audio(caminhoToSound);
    return sound1.play();
}

function selectSoundFile(caracter) {
    switch (caracter) {
        case "w":
            //this.style.color="white";
            playSound("./sounds/tom-1.mp3");
            break;
        case "a":
            playSound("./sounds/tom-2.mp3");
            break;
        case "s":
            playSound("./sounds/tom-3.mp3");
            break;
        case "d":
            playSound("./sounds/tom-4.mp3");
            break;
        case "j":
            playSound("./sounds/snare.mp3");
            break;
        case "k":
            playSound("./sounds/crash.mp3");
            break;
        case "l":
            playSound("./sounds/kick-bass.mp3");
            break;
        default:
            console.log("no sound")
        
    }
}

//checking a bottom press
var buttons = document.querySelectorAll(".drum");
var arrayLength = buttons.length;
for (var i=0; i<arrayLength; i++){
    buttons[i].addEventListener("click", function () {
        selectSoundFile(this.textContent)});
}

//checking key press
document.addEventListener("keydown",function(e){
    selectSoundFile(e.key.toLowerCase());
})
/*for (var i=0; i<arrayLength; i++){
    switch (buttons[i].innerText) {
        case "w":
            buttons[i].addEventListener("click", function(){
                var sound = new Audio("./sounds/tom-1.mp3");
                sound.play();
            });
            break;
        case "a": 
            buttons[i].addEventListener("click", function(){
                var sound = new Audio("./sounds/tom-4.mp3");
                sound.play();
             });
             break;
        default:
            buttons[i].addEventListener("click", function(){
                var sound = new Audio("./sounds/crash.mp3");
                sound.play();
             });
    }   
}*/