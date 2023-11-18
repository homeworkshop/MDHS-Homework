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
  var symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?"1234567890;

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
      transformText(true, "Snap mdhs.homework your Spanish (1) requests.");
      break;
    case "spanish-2":
      transformText(true, "Snap mdhs.homework your Spanish (2) requests.");
      break;
    case "algebra-1":
      transformText(true, "Snap mdhs.homework your Algebra (1) requests.");
      break;
    case "geometry":
      transformText(true, "Snap mdhs.homework your Geometry requests.");
      break;
    case "algebra-2":
      transformText(true, "Snap mdhs.homework your Algebra (2) requests.");
      break;
    case "computer-science":
      transformText(true, "Snap mdhs.homework your Computer Science requests.");
      break;
    case "english":
      transformText(true, "Snap mdhs.homework your English requests.");
      break;
    case "physical-science":
      transformText(true, "Snap mdhs.homework your Physical Science requests.");
      break;
    case "biology":
      transformText(true, "Snap mdhs.homework your Biology requests.");
      break;
    case "world-history":
      transformText(true, "Snap mdhs.homework your World History requests.");
      break;
    default:
      transformText(true, "Unknown subject");
  }
}
