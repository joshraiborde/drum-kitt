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

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    alert("i was clicked!")
})

}