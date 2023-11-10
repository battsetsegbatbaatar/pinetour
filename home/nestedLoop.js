// easy
// draw square
let a = 5;
for (let i = 1; i <= a; i++) {
  let star = "";
  for (let j = 1; j <= a; j++) {
    star += "*";
  }
  console.log("1" + star);
}
for (let i = 1; i <= a; i++) {
  let star = "";
  for (let j = 1; j <= a; j++) {
    star += "*";
    star.pop();
    star.push("+");
  }
  console.log("2" + star);
}

// medium
//  draw triangle

for (let i = 1; i <= b; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log("1" + star);
}

for (let i = 1; i <= b; i++) {
  let star = "";
  for (let j = b; j >= i; j--) {
    star += "*";
  }
  console.log("2" + star);
}
let b = 5;
let star = "*";
for (let i = b; i >= 1; i--) {
  let empty = "";
  console.log(empty);
  for (let j = b; j >= i; j--) {
    star += "";
  }
  console.log(star);
}
// let b = 5;
// for (let i = b; i <= b; i++) {
//   let star = "*";
//   console.log("3" + star);
// }

// draw triangle with number
let c = 5;
for (let i = 5; i < 1; i--) {
  number = i + 1;
  console.log("1" + number);
  for (let j = 1; j <= i; j++) {
    number = i + 1;
    console.log(number);
  }
}
// hard
// draw pyramid
let d = 5;

for (let i = 0; i < d; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    j / 2 - (side / 2 + j * side);
    side * (i + 1);
    star += "*";
  }
  console.log(star);
}
