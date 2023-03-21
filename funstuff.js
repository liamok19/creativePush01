var scoreTracker = document.getElementById("firstValue");
var score = 0;

function addTheValue() {
  score += 1;
  scoreTracker.innerHTML = score;
}

function loseTheValue() {
  score -= 1;
  scoreTracker.innerHTML = score;
}
