// easy
// array members average
let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  sum / arr.length;
}
console.log(sum);

//fibonacci sequence
let a = [0];
let b = [1];
let z = [];

for (let i = 2; i < 100; i++) {
  alert(a + b);
  [i] = a + b;
  x = y;
  z = y;
  return [i];
}
console.log([i]);

// change array last element
let array = [10, 20, 30, 40, 50];
let selct = [30];
for (let i = 0; i < array.length; i++) {
  array.pop();
  array.push(selct);
}
console.log(array);

// sum positive even number
let num = [2, -3, 5, 6, -8, 10];
let sum2 = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] > 0 && num[i] % 2 === 0) {
    sum2 += num[i];
    return sum2;
  }
}
console.log(sum2);s

// medium
// chunk
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let insert = 2;
let chunk = [];
for (let i = 0; i < numbers.length; i++) {
  chunk.push(numbers.slice(i * insert, i * insert + insert));
}
console.log(chunk);

// sort an array
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) {
      var x = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = x;
    }
  }
}
console.log(numbers);

// find max and min
let findMax = 0;
let findMin = 0;
for (let i = 0; i < numbers.length; i++) {
  if ((numbers[i] = math.max)) {
    findMax = max;
  }
  if ((numbers[i] = math.min)) {
    findMin = min;
  }
}
console.log("Max" + findMax, "Min" + findMin);

// hard 
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