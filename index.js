// Select the dodger element
const dodger = document.getElementById("dodger");

// Function to move dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", ""); // Get current position
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    // Prevent moving out of bounds
    dodger.style.left = `${left - 10}px`; // Move left by 10px
  }
}

// Function to move dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", ""); // Get current position
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    // Adjust max limit based on game area width
    dodger.style.left = `${left + 10}px`; // Move right by 10px
  }
}

// Add event listener for arrow keys
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
