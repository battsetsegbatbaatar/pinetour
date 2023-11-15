// const btn = document.getElementById("button");
// function add(number) {
//   const number = 1;
//   return number++;
// }

// btn.addEventListener("click", () => {
//   click += btn;
//   btn = add;
//   document.body.btn.style.backgroundColor = `rgb(225,165,0)`;
// });

const btn = document.getElementById("button");

let i = 0;

function addBox() {
  i++;
  const box = document.createElement("div");
  document.body.appendChild(box);
  box.classList.add("Box");

  box.innerText = i;
}

btn.addEventListener("click", addBox);
