// // m=y2-y1/x2-x1
// let y2 = 1,
//   y1 = 3,
//   x1 = 4,
//   x2 = 5;
// let m = y2 - y1 / x2 - x1;
// console.log(m);

// // gegabyte
// let bit = 1e9,
//   Num = 5;
// let gegabyte = Num * bit;
// console.log(gegabyte);

// // bit
// let BIT = 8000000,
//   MB = 3;
// let bitrate = BIT / MB;
// console.log(bitrate);

// //  gurwaljin
// let side1 = 15,
//   side2 = 13,
//   side3 = 11;
// let p = (side1 + side2 + side3) / 2;
// let S = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
// console.log(S);

// //  c
// let C = 12;
// let F = (C - 32) / 1.8;
// console.log(F);
// let f = -11.1;
// let c = f / 1.8 - 32;
// console.log(c);
let age = 29;
let message = age >= 19 ? "ta nasand hvrsen" : "ta nasand hvreegvi";
console.log(message);
let a = 5,
  b1 = 3,
  c = 2;
if (a > b1 && b1 > c) {
  console.log(a, b1, c);
} else if (b1 > c && c > a) {
  console.log(b1, c, a);
} else if (c > a && a > b1) {
  console.log(c, a, b1);
}

let a1 = 100,
  a2 = 1,
  a3 = 1000,
  a4 = 10;
if (a1 > a2 && a1 > a3 && a1 > a4) {
  b = a1;
} else if (a2 > a3 && a2 > a4 && a2 > a1) {
  b = a2;
} else if (a3 > a4 && a3 > a1 && a3 > a2) {
  b = a3;
} else if (a4 > a1 && a4 > a2 && a4 > a3) {
  b = a4;
}
if (b == a1 && a2 > a3 && a2 > a4) {
  console.log(a2);
} else if (b == a1 && a3 > a2 && a3 > a4) {
  console.log(a3);
} else if (b == a1 && a4 > a3 && a4 > a2) {
  console.log(a4);
}
if (b == a2 && a1 > a3 && a1 > a4) {
  console.log(a1);
} else if (b == a2 && a3 > a1 && a3 > a4) {
  console.log(a3);
} else if (b == a2 && a4 > a1 && a4 > a3) {
  console.log(a4);
}
if (b == a3 && a1 > a2 && a1 > a4) {
  console.log(a1);
} else if (b == a3 && a2 > a1 && a2 > a4) {
  console.log(a2);
} else if (b == a3 && a4 > a1 && a4 > a2) {
  console.log(a4);
}
if (b == a4 && a1 > a2 && a1 > a3) {
  console.log(a1);
} else if (b == a4 && a2 > a3 && a2 > a1) {
  console.log(a2);
} else if (b == a4 && a3 > a2 && a3 > a1) {
  console.log(a3);
}

let sar = 5,
  honog = 30;
if ((sar === 1, 3, 5, 7, 8, 10, 12)) {
  f = honog + 1;
  console.log(sar, f);
} else if (sar === 2) {
  f = honog - 2;
  console.log(sar, f);
} else {
  console.log(sar, honog);
}
console.log;
