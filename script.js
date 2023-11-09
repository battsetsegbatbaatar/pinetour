// console.log("Hi, Battsetseg");
// let n;
// // hunii lastname iig helj bgaa shuu
// let lastName = "Battsetseg";
// const x = {
//   firstName: "Batbaatar",
//   lastName: "Battsetseg",
//   country: "Mongolia",
//   email: "batbaatarbattsetseg122@gmail.com",
// };
// let MN = 5;
// let NL = 10;
// let LM = 8;
// let S = MN + NL + LM;
// console.log(S);

// let r = 15;
// const p = 3.14;
// let C = p * r * r;
// console.log(C);

// let a = 2;
// let b = 2;
// let c = 2;
// let d = 2;
// let P = a + b + c + d;
// console.log(P);

// let f = 15;
// let k = 12;
// let q = f * k;
// let w = f / k;
// let e = f + k;
// let t = f - k;
// console.log(q, w);
// console.log(w);
// console.log(e);
// console.log(t);

// let length = 16;
// console.log(typeof length);

// let lastName2 = "Johnson";
// console.log(typeof lastName2);

// const y = {
//   firstName: "John",
//   lastName: "Doe",
// };
// console.log(typeof y.firstName);
// console.log(typeof y.lastName);

let myAge = 22;

if (myAge > 25) {
  console.log("above 25");
} else {
  console.log("below 25");
}

// 2 dahi ni
let n = 3;
if (n % 2 == 0) {
  console.log("It's even number");
} else {
  console.log("It's odd number");
}
if (n % 2) {
  console.log("It's odd number");
} else {
  console.log("It's even number");
}

// 3dahi ni
let a = 12;
let b = 45;
let c = 30;
if (a > b) {
  console.log(a);
} else if (b > c) {
  console.log(b);
} else if (c > a) {
  console.log(c);
}
// 4 dahi ni

if (a < b) {
  console.log(a);
} else if (b < c) {
  console.log(b);
} else if (c < a) {
  console.log(c);
}

// 5dahi nni
let weekNumber = 2;
if (weekNumber == 1) {
  console.log("Monday-Weekdays");
} else if (weekNumber == 2) {
  console.log("Thueday-Weekdays");
} else if (weekNumber == 3) {
  console.log("Wednesday-Weekdays");
} else if (weekNumber == 4) {
  console.log("Thursday-Weekdays");
} else if (weekNumber == 5) {
  console.log("Friday-Weekdays");
} else if (weekNumber == 6) {
  console.log("Saturday-Weekend");
} else if (weekNumber == 7) {
  console.log("Sunday-Weekend");
}

// 6 dahi ni
let e = 85;
let f = 75;
let g = 96;
let h = 69;
let min = 80;
let j;
if (min < e) {
  j += e;
}
if (min < f) {
  j += f;
}
if (min < g) {
  j += g;
}
if (min < h) {
  j += h;
}
console.log(j);

// 7 dahi ni
let q = 3;
let w = 7;
let r = 2;
let z = 4;
let i = 1;
if (5 > q) {
  i *= q;
}
if (5 > w) {
  i *= w;
}
if (5 > z) {
  i *= z;
}
if (5 > r) {
  i *= r;
}
console.log(i);

// 8 dahi ni
const Bat = 67;

if (Bat < 60) {
  console.log("Bat", Bat, "маш муу");
} else if (Bat < 70) {
  console.log("Bat", Bat, "хангалттай");
} else if (Bat < 80) {
  console.log("Bat", Bat, "дунд");
} else if (Bat < 90) {
  console.log("Bat", Bat, "сайн");
} else if (Bat < 100) {
  console.log("Bat", Bat, "маш сайн");
}

const Ochir = 59;
if (Ochir < 60) {
  console.log("Ochir", Ochir, "маш муу");
} else if (Ochir < 70) {
  console.log("Ochir", Ochir, "хангалттай");
} else if (Ochir < 80) {
  console.log("Ochir", Ochir, "дунд");
} else if (Ochir < 90) {
  console.log("Ochir", Ochir, "сайн");
} else if (Ochir < 100) {
  console.log("Ochir", Ochir, "маш сайн");
}

function reviews(score) {
  if (score < 60) {
    console.log("Bat", Bat, "маш муу");
  } else if (score < 70) {
    console.log("Bat", Bat, "хангалттай");
  } else if (score < 80) {
    console.log("Bat", Bat, "дунд");
  } else if (score < 90) {
    console.log("Bat", Bat, "сайн");
  } else if (score < 100) {
    console.log("Bat", Bat, "маш сайн");
  }
}

let Bat1 = 67;
let Orgil = 59;

reviews(Orgil);

let numbers = prompt("what is the number?");
console.log(numbers);
