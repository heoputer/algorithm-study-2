const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const testCase = input.shift();

for(let i = 1; i < testCase; i++) {
  let key = input[i];
  let j;
  for(j = i - 1; j >= 0 && input[j] > key; j--) {
      input[j + 1] = input[j];
  }
    input[j +1] = key;
}

input.forEach( el => console.log(el))