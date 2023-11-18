let isTransforming = false;

document.getElementById("glitch-button").addEventListener("click", function () {
  submitSubject();
});

function submitSubject() {
  const selectedSubject = document.getElementById("subject").value;
  displayLoading(selectedSubject);
}

function transformText(toUppercase, text) {
  const displayDiv = document.getElementById("displayText");
  const symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  if (isTransforming) return;
  isTransforming = true;
  displayDiv.innerHTML = "";

  function updateText(index) {
    if (index < text.length) {
      const currentChar = text[index];
      const transformedChar = toUppercase ? currentChar.toUpperCase() : currentChar.toLowerCase();
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

      displayDiv.innerHTML += Math.random() < 0.5 ? transformedChar : randomSymbol;

      setTimeout(() => {
        updateText(index + 1);
      }, 50);
    } else {
      displayDiv.innerHTML = text;
      isTransforming = false;

      // After 10 seconds, clear the text in glitch fashion
      setTimeout(() => {
        glitchClearText();
      }, 10000);
    }
  }

  updateText(0);
}

function glitchClearText() {
  const displayDiv = document.getElementById("displayText");
  const symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  function updateGlitch(index) {
    if (index < displayDiv.innerHTML.length) {
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

      displayDiv.innerHTML = displayDiv.innerHTML.substring(0, index) +
        (Math.random() < 0.5 ? randomSymbol : ' ') +
        displayDiv.innerHTML.substring(index + 1);

      setTimeout(() => {
        updateGlitch(index + 1);
      }, 50);
    } else {
      isTransforming = false;
      
      // After glitch effect, transition body back to center vertically
      document.body.style.justifyContent = "center";
    }
  }

  updateGlitch(0);
}

function displayLoading(selectedSubject) {
  const displayDiv = document.getElementById("displayText");
  const loadingText = "Loading...";
  const loadingSpeed = 100;

  displayDiv.textContent = "";

  function updateLoading(index) {
    if (index < loadingText.length) {
      displayDiv.textContent += loadingText[index];

      setTimeout(() => {
        updateLoading(index + 1);
      }, loadingSpeed);
    } else {
      displaySubjectText(selectedSubject);
    }
  }

  updateLoading(0);
}

function displaySubjectText(selectedSubject) {
  const displayDiv = document.getElementById("displayText");

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

  // After 10 seconds, clear the text in glitch fashion
  setTimeout(() => {
    transformText(true, "");
  }, 10000);
}
