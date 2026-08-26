let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateCounter() {
  countDisplay.textContent = count;

  // Change color based on value
  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

increaseBtn.addEventListener("click", function () {
  count++;

  if (count === 10) {
    alert("🎉 Congratulations! You reached 10.");
  }

  updateCounter();
});

decreaseBtn.addEventListener("click", function () {
  if (count > -10) {
    count--;
    updateCounter();
  } else {
    alert("⚠️ Counter cannot go below -10.");
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateCounter();
});

// Show correct color when page first loads
updateCounter();