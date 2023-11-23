const dragRef = document.getElementsByClassName("drag");
const dropRef = document.getElementsByClassName("drop");
// drag and drop
dragRef[0].addEventListener("dragstart", (event) => {});

dropRef[0].addEventListener("dragenter", (event) => {
  alert("Don't allow this pages to display");
  console.log(dropRef);
});
// drag and drop 2
dragRef[1].addEventListener("dragstart", (event) => {});

dropRef[1].addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropRef[1].addEventListener("drop", (event) => {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggetElement = document.getElementById(data);
  var dropZone = event.target;
  dropZone.appendchild(draggetElement);
});
