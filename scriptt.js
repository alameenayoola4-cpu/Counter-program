const incrementbtn = document.getElementById('incrementbtn');
const decrementbtn = document.getElementById('decrementbtn');
const resetbtn = document.getElementById('resetbtn');
const counterDisplay = document.getElementById('counterLabel');
let counter = 0;

incrementbtn.onclick = function() {
    counter++;
    counterDisplay.textContent = counter;
}
decrementbtn.onclick = function() {
    counter--;
    counterDisplay.textContent = counter;
}
resetbtn.onclick = function() {
    counter = 0;
    counterDisplay.textContent = counter;
}

