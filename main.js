
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
function guessIt(){
    let number = parseInt(document.querySelector('input').value);
    if (number < 8) {
        alert("this numb is low");
    } else if (number > 8) {
        alert("this numb is high");
    } else if(number === 8){
        alert("congo");
    }

}