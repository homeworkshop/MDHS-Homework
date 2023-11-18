var isTransforming = false;

function submitSubject() {
  var selectedSubject = document.getElementById("subject").value;
  window.location.href = selectedSubject + ".html";
}

function transformText(toUppercase) {
  var button = document.getElementById('submitBtn');
  var buttonText = button.innerText;
  var symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  // Check if transformation is already in progress
  if (isTransforming) return;

  isTransforming = true;

  // Clear the button text
  button.innerText = "";

  // Create a function to update the button text with glitch effect
  function updateText(index) {
    if (index < buttonText.length) {
      var currentChar = buttonText[index];
      var transformedChar = toUppercase ? currentChar.toUpperCase() : currentChar.toLowerCase();
      var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

      // Apply glitch effect by randomly replacing characters with symbols
      button.innerText += Math.random() < 0.5 ? transformedChar : randomSymbol;

      setTimeout(function () {
        updateText(index + 1);
      }, 50); // Adjust the timeout for glitch speed
    } else {
      // After the glitch effect, set the final text to uppercase
      button.innerText = buttonText.toUpperCase();
      isTransforming = false; // Reset the flag
    }
  }

  // Start the glitch effect from the first character
  updateText(0);
}

// Attach event listeners using JavaScript
document.getElementById("submitBtn").addEventListener("click", function() {
  submitSubject();
});

document.getElementById("submitBtn").addEventListener("mouseover", function() {
  transformText(true);
});

document.getElementById("submitBtn").addEventListener("mouseout", function() {
  transformText(false);
});
