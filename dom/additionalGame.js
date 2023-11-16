const check = document.getElementById("check");
const start = document.getElementById("start");

function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

check.addEventListener("click", sumNumber);
function updateNumber(number) {
  document.getElementById("randomNumber1").value = randomNumber();
  document.getElementById("randomNumber2").value = randomNumber();
  document.getElementById("sum").value = "";
}
start.addEventListener("click", updateNumber);

function sumNumber() {
  const random1 = document.getElementById("randomNumber1").value;
  const random2 = document.getElementById("randomNumber2").value;
  const sum = document.getElementById("sum").value;

  if (Number(sum) === Number(random1) + Number(random2)) {
    return alert("Correct");
  } else {
    return alert("Incorrect");
  }
}
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
function randomColor() {
  const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndColor;
  console.log(rndColor);
}
const color = document.getElementById("color");
color.addEventListener("click", randomColor);
