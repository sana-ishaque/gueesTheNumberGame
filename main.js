let randomNumberForEasy = Math.floor(Math.random() * 10);
let randomNumberForMedium = Math.floor(Math.random() * 50);
let randomNumberForHard = Math.floor(Math.random() * 100);
document.querySelector('span').style.color = "#FFEB3B";
document.querySelector('span').style.fontSize = "25px";
document.querySelector('span').style.fontFamily = "cursive";
function playEasy() {
    document.querySelector('input').style.borderColor = "#00BCD4";
    document.querySelector('#guess').style.borderColor = "#00BCD4";
    document.querySelector('#guess').style.outlineColor = "#00BCD4";
    document.querySelector('input').style.visibility = "visible";
    document.querySelector('#guess').style.visibility = "visible";
    document.querySelector('h1').style.color = "#00BCD4";
    document.querySelector('p').style.visibility = "hidden"
}

function guessIt() {
    let userInput = parseInt(document.querySelector('input').value);
    if (userInput == NaN) {
        alert('PLEASE ENTER Number');
    } else if (userInput < randomNumberForEasy) {
        document.querySelector("#comment").innerHTML = "Number is low";
    } else if (userInput > randomNumberForEasy) {
        document.querySelector("#comment").innerHTML = "Number is high";
    } else if (userInput == randomNumberForEasy) {
        document.querySelector("#comment").innerHTML = "BINGOOOOOO, You Won !!";

    }
    document.querySelector('input').value = "";
}

function playMedium() {
    document.querySelector('p').style.visibility = "visible"
    document.querySelector('input').style.borderColor = "#FFEB3B";
    document.querySelector('#guess').style.borderColor = "#FFEB3B";
    document.querySelector('#guess').style.outlineColor = "#FFEB3B";
}
function playHard() {
    document.querySelector('input').style.borderColor = "#F44336";
    document.querySelector('#guess').style.borderColor = "#F44336";
    document.querySelector('#guess').style.outlineColor = "#F44336";
}

//     let userInput = parseInt(document.querySelector('input').value);
//     if (userInput < randomNumberForEasy) {
//         alert('low');
//     } else if (userInput > randomNumberForEasy) {
//         alert('high');
//     } else if (userInput == randomNumberForEasy) {
//         alert('BINGOOOOOO');
//     }
//     document.querySelector('input').value = "";
// }
