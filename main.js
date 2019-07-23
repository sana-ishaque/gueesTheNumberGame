// let randomNumberForEasy = Math.floor(Math.random() * 10);
// let randomNumberForMedium = Math.floor(Math.random() * 50);
// let randomNumberForHard = Math.floor(Math.random() * 100);
let randomNumber;
let maxTries;
// span styling
// document.querySelector('span').style.color = "#FFEB3B";
document.querySelector('span').style.fontSize = "25px";
document.querySelector('span').style.fontFamily = "cursive";

// number selection
document.querySelector('#restriction').style.fontSize = '15px';


function playEasy() {
    document.querySelector('input').style.borderColor = "#00BCD4";
    document.querySelector('#guess').style.borderColor = "#00BCD4";
    document.querySelector('#guess').style.outlineColor = "#00BCD4";
    document.querySelector('input').style.visibility = "visible";
    document.querySelector('#guess').style.visibility = "visible";
    document.querySelector('h1').style.color = "#00BCD4";
    document.querySelector('p').style.visibility = "hidden";
    randomNumber = Math.floor(Math.random() * 50 + 1);
    document.querySelector('span').style.color = "#00BCD4";
    document.querySelector('#restriction').style.color = "#00BCD4";
    document.querySelector('#restriction').innerHTML = "Choose numner betwee 1 - 50";
}
function playMedium() {
    // document.querySelector('p').style.visibility = "visible"
    document.querySelector('input').style.borderColor = "#FFEB3B";
    document.querySelector('#guess').style.borderColor = "#FFEB3B";
    document.querySelector('#guess').style.outlineColor = "#FFEB3B";
    randomNumber = Math.floor(Math.random() * 100 + 1);
    document.querySelector('span').style.color = "#FFEB3B";
    document.querySelector('#restriction').style.color = "#FFEB3B";
    document.querySelector('#restriction').innerHTML = "Choose numner betwee 50 - 100";
}
function playHard() {
    document.querySelector('input').style.borderColor = "#F44336";
    document.querySelector('#guess').style.borderColor = "#F44336";
    document.querySelector('#guess').style.outlineColor = "#F44336";
    randomNumber = Math.floor(Math.random() * 150);
    document.querySelector('span').style.color = "#F44336";
    document.querySelector('#restriction').style.color = "#F44336";
    document.querySelector('#restriction').innerHTML = "Choose numner betwee 100 - 150";
}

function guessIt() {
    let userInput = parseInt(document.querySelector('input').value);
    /*if (userInput === "") {
        alert('PLEASE ENTER Number');
    } else*/ if (userInput < randomNumber) {
        document.querySelector("#comment").innerHTML = "Number is low";
    } else if (userInput > randomNumber) {
        document.querySelector("#comment").innerHTML = "Number is high";
    } else if (userInput == randomNumber) {
        document.querySelector("#comment").innerHTML = "BINGOOOOOO, You Won !!";

    }
    document.querySelector('input').value = "";
    // document.querySelector('span').innerHTML = "";

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
