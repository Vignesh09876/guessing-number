const guessNumber = document.getElementById("guessNumber");
const guessBtn = document.getElementById("guessBtn");
const result = document.getElementById("result");
const attemptsresults = document.getElementById("attemptsresults");

// guessing the random number using random
// innerText -> Alters the text
// innerHTML -> Insert new html element

const randomNumber = Math.floor(Math.random() * 100) + 1;
let results = [];
let attempts = 0;

guessBtn.addEventListener("click", () => {
  const GN = parseInt(guessNumber.value);
  if (GN == "" || GN < 0 || GN > 100 || isNaN(GN)) {
    printDetails({
      status: "info",
      ans: "Please provide input in-between 0-100",
    });
  } else {
    if (GN === randomNumber) {
      printDetails({
        status: "green",
        ans: `congrats ${GN} is the correct number`,
      });
    } else if (GN < randomNumber) {
      printDetails({ status: "yellow", ans: `Guessed too low` });
    } else {
      printDetails({ status: "red", ans: `Guessed too high` });
    }
  }
});

const printDetails = (res) => {
  attempts++;
  results.push(res);
  buildData();
};

const buildData = () => {
  result.innerHTML = "";
  //   for each, map -> Object iterations
  //   `` -> Back Tick -> String Literals -> To customize the string
  //  string placeholder => ${}
  console.log(results);
  results.forEach((resp) => {
    result.innerHTML += `<p class="${resp.status}">${resp.ans}</p>`;
  });
  attemptsresults.innerHTML = `<p>Attempts = <span>${attempts}</span></p>`;
};