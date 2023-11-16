// DOM change text
function changeText() {
  const changet = document.getElementById("text");
  changet.innerText = "Pinecone became Unicorn";
  changet.style.backgroundColor = "yellow";
}
const change = document.getElementById("changeT");
change.addEventListener("click", changeText);
// dom-color-change
const box = document.getElementById("Box");
box.style.length = 50 + "px";
box.style.width = 50 + "px";
box.style.backgroundColor = "red";
function Box() {
  if (box.style.backgroundColor === "green") {
    box.style.backgroundColor = "red";
  } else {
    box.style.backgroundColor = "green";
  }
}
const colorBox = document.getElementById("colorBox");
colorBox.addEventListener("click", Box);
// colorful circle
const input = document.getElementById("input");
