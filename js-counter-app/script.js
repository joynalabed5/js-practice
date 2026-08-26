
let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateCounter(){
    countDisplay.textContent = count;
}

increaseBtn.addEventListener("click", function(){
    count++;
    updateCounter();
});

decreaseBtn.addEventListener("click", function(){
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", function(){
    count = 0;
    updateCounter();
});