
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {



        var buttoninnerHtml = this.innerHTML;
        buttonAnimation(buttoninnerHtml);
        makesound(buttoninnerHtml);
    });
}


document.addEventListener('keypress', function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
})


function makesound(key) {
    switch (key) {

        case 'a':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 's':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'd':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'f':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        default:
            break;
    }
}


function buttonAnimation(currentkey) {
    document.querySelector("." + currentkey).classList.add('pressed');


    setTimeout(function () {
        document.querySelector("." + currentkey).classList.remove("pressed")
    }, 100)
}
