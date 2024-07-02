let guessNumber = Math.floor(Math.random() * 100);
let inputNumber = document.querySelector('#guess-number');
let button = document.getElementById(".button");

button.addEventListener("click", function(){
    console.log("button is clicked!");
})

console.log(inputNumber)

//Last guess was too low
//Last guess was to high