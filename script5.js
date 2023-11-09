// array-essey-membersAverage
let arr = [10, 20, 30, 40, 50, 60];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr.length);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("sum", sum);
let dundaj = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  dundaj = sum / arr.length;
}
console.log(dundaj);

// change array last element
let number = [10, 20, 30, 40, 50];
let num = 30;
let lastEl = number.pop();
// for (let i = 0; i < arr.length; i++) {
//   input = arr[i]--
//   console.log(input);
// }
console.log("pop", lastEl);
console.log("number pop", number);
console.log("push", number.push(num));
console.log("number push", number);

// Sum positive even number
// let number2=[2,-3,5,6,-8, 10];
// let sum2="0";
// for(let i=0; i>=0;i++){
//   if(arr[i]&&arr[i]% 2 === 0){
//     sum+=arr[i];
//   }
// } console.log(sum);

// medium-sort an array
// const array = [1, 2, 0, 8, 12];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++);
// }

// chunk
let Array = [1, 2, 3, 4, 5, 6, 7, 8];
let insert = 2;
let emptyArr = [];
for (let i = 0; i < arr.length / insert; i++) {
  emptyArr.push(Array.slice(i * insert, i * insert + insert));
}
console.log(emptyArr);

// sort an array
let num1 = [5, 4, 3, 2, 1];

for (let i = 0; i <= num1.length; i++) {
  for (let j = 0; j <= num1.length; j++) {
    // num1[i] <= num1[j] return num1[i] = a
    if (num1[i] <= num1[j]) {
      var x = num1[i];
      num1[i] = num1[j];
      num1[j] = x;
    }
  }
}
console.log(num1);

num1.sort((a, b) => a - b);
console.log(num1);

// find max and min
let findMaxMin = [29, 30, 14, 25, 3, 5];
let findMin = [0];
let findMax = [0];
for (let i = 0; i < findMaxMin.length; i++) {
  if (findMaxMin[i] > Math.min) {
    findMin = Math.min;
  }
  if (findMaxMin[i] < Math.max) {
    findMax = Math.max;
  }
}
console.log(findMin, findMax);

function findMaxMin2() {
  let arr = [29, 30, 14, 25, 3, 5];
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  return { min: minValue, max: maxValue };
}

console.log(findMaxMin2());
// ARREY-HARD
// longest increasing subsequence
let nums = [10, 9, 2, 5, 3, 7, 101, 18];
let num2 = 0;
let arr2 = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < nums[i + 1]) {
    arr2.push(nums[i + 1]);
    num2 = arr2.length + 1;
  }
}

console.log(num2);

// find max subarray sum
let nums2 = [1, -2, 3, 4, -1, 2, 1, -5, 4];
let max = 0;
for (let i = 0; i < nums2.length; i++) {
  for (let j = i; j < nums2.length; j++) {
    let sum = 0;
    for (let k = i; k < j; k++) {
      sum += nums2[k];
    }
    max = Math.max(max, sum);
  }
}
console.log(max);

// find special number
let numbers = [2, 4, 7, 8, 10];
let even = 0;
let odd = 0;
let specialNum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
for (let i = 0; i < numbers.length; i++) {
  if (even == 1) {
    if (numbers[i] % 2 == 0) {
      specialNum = i + 1;
      console.log(specialNum);
    }
  }
  if (odd == 1) {
    if (numbers[i] % 2 !== 0) {
      specialNum = i + 1;
    }
  }
}
console.log(specialNum);

// check magic cube
function Cube() {
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ];
}
for(let i=0;i<Cube[0].length;i++){
  for(let j=0;j<Cube[0].length;j++)
  const sum=Cube[j].[i]
  console.log(sum)
}