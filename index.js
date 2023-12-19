for(var i=0; i<document.querySelectorAll(".drum").length;i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        
        // this.style.color = "white";
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function handleClick() {
    alert("I got clicked!");
}

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;  

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;   

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break; 

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;   

        default:console.log(key);
}
}

function buttonAnimation(currentKey){
   var activeBut = document.querySelector("." + currentKey);

   activeBut.classList.add("pressed");

   setTimeout(function() {
    activeBut.classList.remove("pressed");
   }, 100);
}

// 1) for(var i=0; i<document.querySelectorAll(".drum").length;i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }

// function handleClick() {
//     alert("I got clicked!");
// }

// 2) var count=0;

// for(var i =0;i<=7;i++) {
//     document.querySelectorAll("button")[count++].addEventListener("click", handleClick);
// }

// document.querySelector("button").addEventListener("click", handleClick);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);




