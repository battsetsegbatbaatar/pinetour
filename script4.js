// // for (num = 1; num < 6; num++) {
// //   for (a = 1; (num %= 0); b = a * num) {
// //     console.log(b);
// //   }
// // }
// // let utga = prompt("please insert the number");
// let number = 2,
//   z = 0,
//   t = 1000;
// // for (let z = 0, t = 1000; number<=t; z++) {
// //   number**=z;

// // }
// let result = 1;
// let pow = 0;

// while (result <= t) {
//   pow++;
//   result = Math.pow(number, pow);
// }
// console.log("pow", pow);
// console.log(`${number} zereg ni ${pow}: ${result}`);

let utga = 5;

for (let num = 1; num <= utga; num++) {
  let str = "";
  console.log("num", num);
  for (let j = 1; j <= utga; j++) {
    str += "*";
    // console.log("utga", j);
  }
  console.log(`${str}\n`);
}
for (let c = 1; c <= 1000; c++) {
  for (let d = ""; (c %= 0); ) {
    d += c;
  }
  // }console.log(b);
}
//  bodlogo2
// for(let a=12,b=18:)
// do while bodlogo 1
// let n = 100,
//   i = 1;
// do {
//   console.log(i);
// } while (i <= n);
// {
//   i++;
// }
let number = 1;
for (let a = 0; a <= number; a++) {
  if (a == 6) {
    break;
  }
  console.log("number" + a + "<br>");
}
for (let a = 0; a <= number; a++) {
  if (a == 6) {
    continue;
  }
  console.log("number" + a + "<br>");
}
let x = 3;
function findXCube(x) {
  const cube = x ** 3;
  return cube;
}
console.log("fx" + findXCube(3));
