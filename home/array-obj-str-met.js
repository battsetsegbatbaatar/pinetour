// easy
// // ascending order
let input = { b: 2, a: 1, c: 3 };
let output = [];
output = Object.keys(input).sort();
console.log(output);

// array reverse
const Name1 = {
  lastName: "Batbaatar",
  firstName: "Battsetseg",
  FullName: function name() {
    if (lastName && firtName) {
      let upperLastName = this.lastName.toUpperCase();
      return upperLastName + " " + this.firstName;
    } else {
      return "Wrong value";
    }
  },
};
console.log(Name1.toString());

const user = {
  firstname: "Battsetseg",
  lastname: "Batbaatar",
};

console.log(`${user.firstname.toUpperCase()} ${user.lastname}`);

// readme
let string = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let string1 = [5, 6, 7, 8, 9];
let j = 5;
// for (let i = 0; i < string.length; i++) {
//   if ((j = string[i])) {
//     let position = i + 1;
//     return position;
//   }
// }
const last3 = string.splice(7, 3);
console.log(string);
string.splice(-3);
console.log(string);
string.pop();
console.log("pop", string);
string.pop(3);
console.log(string);
const stringChild = string.concat(string1);
console.log(stringChild);

// array reserve
let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arr5 = [];
for (let i = array.length; i > 0; i--) {
  arr5.push(array[i]);
}
console.log(+arr5);

// sort by frequency
var arr = ["apple", "banana", "apple", "cherry", "cherry", "cherry"];
var freq = {};
for (var i in arr) freq[i] = freq[i] ? freq[i] + 1 : 0;
arr.sort(function (a, b) {
  return freq[a] > freq[b] ? -1 : 1;
});
for (var a = arr.length - 1; i > 0; i--)
  if (arr[i] == arr[i - 1]) arr.splice(i, 1);
alert(arr.join(","));

// updateStudentGrades
// function array(1){
//     Math:80, pizik:90,

// }
function studentGrades() {
  [
    { name: "Alice", grades: array(3), averageGrade: 80 },
    { name: "Bob", grades: array(3), averageGrade: 85 },
    { name: "Charlie", grades: array(3), averageGrade: 85 },
  ];
}
// medium
// find duplicate element
let orolt = [3, 2, 3, 4, 5];
let y = orolt[0];
let garalt = 0;
for (let i = 1; i < orolt.length; i++) {
  if ((orolt[i] = y)) {
    garalt = orolt[i];
  }
}
console.log(garalt);

// maching string in array
