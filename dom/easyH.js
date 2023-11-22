// change text content
// use document.getElementById() to get an element by its ID
function changeText() {
  const changeText = document.getElementById("changeText");
  // change the text content og that element using the textContent property
  changeText.textContent = "Battsetseg B.";
  const btn = document.getElementById("btn");
}
btn.addEventListener("click", changeText);

// Change styling
// Use document.querySelector() to select an element using a CSS selector.
function changeStyle() {
  const changeStyle = document.querySelector("div #create");
  // Change the style of the selected element using the style property
  changeStyle.style.color = "red";
}
const style = document.addEventListener("click", changeStyle);

// handle click events
// Use document.getElementById() to get a button element.
const clickEvent = document.getElementById("click");
function text() {
  const text = document.getElementById("text");
  // Attach a click event listener to the button that changes the text content of a paragraph.
  text.textContent = "mmmm gnsdh hsavdvahj bhhd";
}
clickEvent.addEventListener("click", text);

// create and append element
// Use document.createElement() to create a new HTML element.
function create() {
  const create = document.createElement("div");
  // Use appendChild() to append the new element to an existing one.
  create.textHTMl = "Hi";
  document.body.appendChild(create);
}
const createEl = documnet.getElementById("createEl");
createEl.addEventListener("click", create);

// toggle visibility
// Use document.getElementById() to get an element.
function displayNone() {
  const displayNone = documeny.getElementById("displayNone");
  // Toggle its visibility by changing the style.display property.
  displayNone.style.display = "none";
}
const disNone = document.getElementById("disNone");
disNone.addEventListener("click", displayNone);

// create list
// Use a loop (e.g., for or while) to generate a list of items dynamically and append them to an unordered list (<ul>)
let input = 5;
const list = document.getElementById("list");
for (let i = 0; i < input; i++) {
  const createList = document.createElement("li");
  createList.textContent = "List" + i;
  const node = document.createTextNode(createList);
}
list.appendChild(node);

// highlight even/odd rows
// Use a loop to iterate over table rows and apply different styles to even and odd rows.

const table = document.getElementsByTagName("#table tbody");
const data = [
  ["Data 1", "Data 2", "Data 3"],
  ["Data 1", "Data 2", "Data 3"],
  ["Data 1", "Data 2", "Data 3"],
];
function loop() {
  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < data[i].length; j++) {
      const th = document.createElement("th");
      if (i % 2 === 0) {
        return (data.textContent = "even");
      } else {
        return (data.textContent = "odd");
      }
    }
  }
}
table.appendChild(loop);

// dynamic dropdown options
// Use a loop to populate a dropdown (<select>) with dynamic options.
var dynamicOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
];

const dropdown = document.getElementById("dropdown");
for (let i = 0; i < dropdown.length; i++) {
  const option = document.createElement("option");
  option.text = dynamicOptions[i];
  option.value = dynamicOptions[i];
  dropdown.add(option);
}
