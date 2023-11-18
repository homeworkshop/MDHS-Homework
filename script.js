var isTransforming = false;

function submitSubject() {
  var selectedSubject = document.getElementById("subject").value;
  displayLoading(selectedSubject);
}

function transformText(toUppercase, text) {
  var displayDiv = document.getElementById("displayText");
  var symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  if (isTransforming) return;

  isTransforming = true;
  displayDiv.innerText = "";

  function updateText(index) {
    if (index < text.length) {
      var currentChar = text[index];
      var transformedChar = toUppercase ? currentChar.toUpperCase() : currentChar.toLowerCase();
      var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

      displayDiv.innerText += Math.random() < 0.5 ? transformedChar : randomSymbol;

      setTimeout(function () {
        updateText(index + 1);
      }, 50);
    } else {
      displayDiv.innerText = text;
      isTransforming = false;
    }
  }

  updateText(0);
}

function displayLoading(selectedSubject) {
  var displayDiv = document.getElementById("displayText");
  var loadingText = "Loading...";
  var loadingSpeed = 100;

  displayDiv.innerText = "";

  function updateLoading(index) {
    if (index < loadingText.length) {
      displayDiv.innerText += loadingText[index];

      setTimeout(function () {
        updateLoading(index + 1);
      }, loadingSpeed);
    } else {
      displaySubjectText(selectedSubject);
    }
  }

  updateLoading(0);
}

function displaySubjectText(selectedSubject) {
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
