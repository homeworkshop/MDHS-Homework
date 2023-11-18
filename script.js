var isTransforming = false;

document.getElementById("submitBtn").addEventListener("click", function () {
  submitSubject();
});

function submitSubject() {
  var selectedSubject = document.getElementById("subject").value;
  displayLoading(selectedSubject);
}

function transformText(toUppercase, text) {
  var displayDiv = document.getElementById("displayText");
  var symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  if (isTransforming) return;
  isTransforming = true;
  displayDiv.textContent = "";

  function updateText(index) {
    if (index < text.length) {
      var currentChar = text[index];
      var transformedChar = toUppercase ? currentChar.toUpperCase() : currentChar.toLowerCase();
      var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

      displayDiv.textContent += Math.random() < 0.5 ? transformedChar : randomSymbol;

      setTimeout(function () {
        updateText(index + 1);
      }, 50);
    } else {
      displayDiv.textContent = text;
      isTransforming = false;
    }
  }

  updateText(0);
}

function displayLoading(selectedSubject) {
  var displayDiv = document.getElementById("displayText");
  var loadingText = "Loading...";
  var loadingSpeed = 100;

  displayDiv.textContent = "";

  function updateLoading(index) {
    if (index < loadingText.length) {
      displayDiv.textContent += loadingText[index];

      setTimeout(function () {
        updateLoading(index + 1);
      }, loadingSpeed);
    } else {
      // Reset the isTransforming flag before calling displaySubjectText
      isTransforming = false;
      displaySubjectText(selectedSubject);
    }
  }

  updateLoading(0);
}

function displaySubjectText(selectedSubject) {
  var displayDiv = document.getElementById("displayText");

  switch (selectedSubject) {
    case "spanish-1":
    case "spanish-2":
    case "algebra-1":
    case "geometry":
    case "algebra-2":
    case "computer-science":
    case "english":
    case "physical-science":
    case "biology":
    case "world-history":
      transformText(true, "Snap mdhs.homework your requests.");
      break;
    default:
      transformText(true, "Unknown subject");
  }
}
