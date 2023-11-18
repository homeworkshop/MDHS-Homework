var isTransforming = false;

function submitSubject() {
  var selectedSubject = document.getElementById("subject").value;
  displayLoading(selectedSubject);
}

function transformText(toUppercase, text) {
  var displayDiv = document.getElementById("displayText");
  var symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  // Check if transformation is already in progress
  if (isTransforming) return;

  isTransforming = true;

  // Clear the display text
  displayDiv.innerText = "";

  // Create a function to update the display text with glitch effect
  function updateText(index) {
    if (index < text.length) {
      var currentChar = text[index];
      var transformedChar = toUppercase ? currentChar.toUpperCase() : currentChar.toLowerCase();
      var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

      // Apply glitch effect by randomly replacing characters with symbols
      displayDiv.innerText += Math.random() < 0.5 ? transformedChar : randomSymbol;

      setTimeout(function () {
        updateText(index + 1);
      }, 50); // Adjust the timeout for glitch speed
    } else {
      // After the glitch effect, set the final text
      displayDiv.innerText = text;
      isTransforming = false; // Reset the flag
    }
  }

  // Start the glitch effect from the first character
  updateText(0);
}

function displayLoading(selectedSubject) {
  var displayDiv = document.getElementById("displayText");
  var loadingText = "Loading...";
  var loadingSpeed = 100; // Adjust the speed of the typewriter effect

  // Clear the display text
  displayDiv.innerText = "";

  // Create a function to update the display text with typewriter effect
  function updateLoading(index) {
    if (index < loadingText.length) {
      displayDiv.innerText += loadingText[index];

      setTimeout(function () {
        updateLoading(index + 1);
      }, loadingSpeed);
    } else {
      // After the typewriter effect, display the text specific to the subject
      displaySubjectText(selectedSubject);
    }
  }

  // Start the typewriter effect from the first character
  updateLoading(0);
}

function displaySubjectText(selectedSubject) {
  // Set content based on the selected subject
  switch (selectedSubject) {
    case "spanish":
      transformText(true, "Snap mdhs.homework with what you want done.");
      break;
    case "geometry":
      transformText(true, "Snap mdhs.homework with what you want done.");
      break;
    case "computer-science":
      transformText(true, "Snap mdhs.homework with what you want done.");
      break;
    case "english":
      transformText(true, "Snap mdhs.homework with what you want done.");
      break;
    case "physical-science":
      transformText(true, "Snap mdhs.homework with what you want done.");
      break;
    case "world-history":
      transformText(true, "Snap mdhs.homework with what you want done.");
      break;
    default:
      transformText(true, "Unknown subject");
  }
}

// Attach event listeners using JavaScript
document.getElementById("submitBtn").addEventListener("click", function() {
  submitSubject();
});
