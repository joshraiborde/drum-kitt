// DETECTING BUTON PRESS-IF A BUTTON HAS BEEN CLICKED
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// DETECTING KEYBOARD PRESS-IF ONE OF DRUM LETTERS HAVE BEEN PRESSED

document.addEventListener("keydown", function (event) {
    makeSound(event.key);    
    // .key is a propery of a keydown event
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('/sounds/tom-1.mp3')
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('/sounds/tom-2.mp3')
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('/sounds/tom-3.mp3')
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('/sounds/tom-4.mp3')
            tom4.play();
            break;

        case "j":
            var snare = new Audio('/sounds/snare.mp3')
            snare.play();
            break;

        case "k":
            var crash = new Audio('/sounds/crash.mp3')
            crash.play();
            break;

        case "l":
            var kick = new Audio('/sounds/kick-bass.mp3')
            kick.play();
            break;
    
        default:
            console.log(buttonInnerHTML)
    }
    
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}



// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("i got clicked!")
// }

// document.querySelector("button").addEventListener("click", function(){
//     alert("w was clicked!")
// })

// document.querySelectorAll("button").addEventListener("click", function(){
//     alert("i was clicked!")
// })

// CHALLENGE: add a click event to all the buttons.



// for (var i = 0; i<numberOfDrumButtons; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     alert("i was clicked!")
// })

// }

// var drumButtons = document.querySelectorAll(".drum").length;


// var audio = new Audio('/sounds/tom-1.mp3')
// audio.play();
// var audioButtons = new Audio('/sounds')