const sum = document.getElementById("sum");
const check = document.getElementById("check");
const start = document.getElementById("start");
const random1 = document.getElementById("randomNumber1").value;
const random2 = document.getElementById("randomNumber2").value;

function randomNumber() {
  const sum1 = random1 + random2;
  if ((sum = sum1)) {
    alert("answer: true");
  } else {
    alert("answer: false");
  }
}
check.addEventListener("click", randomNumber);

// start.addEventListener("click", random1.remove(0), random2.remove(0));
