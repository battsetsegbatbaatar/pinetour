// 1to100
for (too = 1; too <= 100; too++) {
  console.log(too);
}

// Even number sum
let utga = 3;

for (num = 1, nem = 0; num < utga; num++) {
  if ((num/2%=0)) {
    nem += num;
  }

  console.log(nem);
}

// N number sum
let utg = 0;
for (let a = 1; a <= utga; a++) {
  utg += a;
}
console.log(utg);

// number pow
let number = prompt("please insert the pow");
let result = 1;
let pow = 0;

while (result <= t) {
  pow++;
  result = Math.pow(number, pow);
}
console.log("pow", pow);
console.log(`${number} zereg ni ${pow}: ${result}`);
