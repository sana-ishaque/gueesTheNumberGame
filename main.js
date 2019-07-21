
document.querySelector('input').style.visibility = "hidden";
document.querySelector('#guess').style.visibility = "hidden";
function playEasy() {
    document.querySelector('input').style.visibility = "visible";
    document.querySelector('#guess').style.visibility = "visible";
}
function playMedium() {
    document.querySelector('input').style.visibility = "visible";
    document.querySelector('#guess').style.visibility = "visible";
}
function playHard() {
    document.querySelector('input').style.visibility = "visible";
    document.querySelector('#guess').style.visibility = "visible";
}
function guessIt() {
    let randomNumber = Math.floor(Math.random()*10);
    let number = parseInt(document.querySelector('input').value);
    if (number < randomNumber) {
        alert("this numb is low");
    } else if (number > randomNumber) {
        alert("this numb is high");
    } else if (number === randomNumber) {
        alert("Bingoo !!!");
    }
    document.querySelector('input').value = "";
}