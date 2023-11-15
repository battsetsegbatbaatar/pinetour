// easy
// 1 to 100
for (let i = 1; i < 100; i++) {
    console.log(i);
  }
  
  // even number sum
  let num = [1, 2, 3, 4, 5, 6];
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      sum += num;
    }
  }
  console.log(sum);
  
  // N number sum
  let sum2 = 10;
  for (let i = 0; i < sum2.length; i++) {
    sum2 += i;
  }
  console.log(sum2);
  
  // NUmber pow
  let a = 2;
  let result = 1;
  let pow = 0;
  while (result <= t) {
    pow++;
    result = math.pow(a, pow);
  }
  console.log("a" + "zereg ni" + pow + "=" + result);
  
  // medium
  // bubble sort
  
  // Left pyramid pattern
  let arr = [1, 2, 3, 10];
  let findMin = 0;
  let findMax = 0;
  let minus = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] = math.min)) {
      findMin = min;
    }
    if ((arr[i] = math.max)) {
      findMax = max;
    }
    minus = max - min;
  }
  console.log(minus);
  
  // left pyramid pattern
  let c = 5;
  let star = "";
  for (let i = 0; i < c.length; i++) {
    for (let j = 0; j >= i; j++) star += "*";
  }
  console.log(star);
  
  // min operations
  let utga = [1, 2, 3, 4, 5];
  let operation = 0;
  for (let i = 0; i < utga.length; i++) {
    for (let j = utga.length; j > 0; j--);
    operation = utga[i] + utga[j];
  }
  console.log(operation);
  
  // Hard
  // cheese board
  let b = 3;
  for (let i = 0; i < b; i++) {
    let board = "";
    for (let j = 0; j < b; j++) {
      if ((j + i) % 2 == 0) {
        board += "*";
      } else {
        board += "+";
      }
    }
    console.log(board);
  }
  
  // fibonacci series
  let fiSeries = [0, 1];
  for (let i = 2; i < b; i++) {
    let nextSerius = fiSeries[i - 1] + fiSeries[i - 2];
    fiSeries.push(nextSerius);
  }
  console.log(fiSeries);
  
  // is plindrome
  
  // prime number
  let prime = 6;
  let thisPrime = true;
  let sum3 = 1 + prime;
  for (let i = 2; i < prime; i++) {
    if (prime % i == 0) {
      thisPrime = false;
      sum3 += i;
    }
    if (thisPrime == true) {
      thisPrime = "prime";
    } else {
      thisPrime = "sum:" + sum3;
    }
  }
  console.log(thisPrime);