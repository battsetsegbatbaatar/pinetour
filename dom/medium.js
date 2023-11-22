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
function circle() {
  const input = document.getElementById("input").value;
  for (let i = 0; i < input; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    document.body.appendChild(circle);
    console.log(circle);
    const random = Math.floor(Math.random() * 256);
    circle.style.backgroundColor = "rgb(" + 0 + "," + 225 + "," + random + ")";
  }

  const gene = document.getElementById("gene");
  gene.addEventListener("click", circle);
}
// dynamic search filter
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Watermelon",
  "Mango",
  "Strawberry",
  "Pineapple",
  "Cherry",
];
function filteredFriut() {
  const friutInput = document.getElementById("friutInput").value.toLowerCase;
  const filtered = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(friutInput)
  );
  const result = document.getElementById("filteredFriut");
  result.innerHTML = "";
  filtered.forEach((friut) => {
    const list = document.createElement("li");
    list.textContent = friut;
    result.appendChild(list);
  });
  console.log(filtered);
}
const output = document.getElementById("output");
// output.addEventListener("input", filteredFriut);
// image carousel
// const imgCarousel = documnet.getElementById("imgCarousel");
// const img = document.querySelectorAll("#imgCarousel img");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = documnet.getElementById("nextBtn");
// img.addEventListener("DOMCONtentLoaded", () => {
//   let i = 0;
//   function update() {
//     img.forEach(() => {
//       img.style.order = (i - 1 + img.length) % img.length;
//     });
//   }
//   function PBtn(prevBtn = img.length === 0) {
//     i++;
//     update();
//   }
//   function NBtn(nextBtn = img.length) {
//     i--;
//     update();
//   }
//   function trans() {
//     update.style;
//   }
// });
// shapes
function s(){
  const squ=document.createElement("div")
  
}
// TO-DO list
const state = {
  tasks: [],
};
let taskList = document.getElementById("taskList");
function btn() {
  const taskText = document.getElementById("newTask").value;
  console.log(taskText);
  const list = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(list);
  });
  const node = document.createTextNode(taskText);
  list.appendChild(node);
  taskList.appendChild(list);
  list.appendChild(deleteBtn);
}