const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCase = Number(input.shift());
let coordinate = input.map(i => i.split(" ").map(Number));
let result = "";
 
coordinate.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  else return a[1] - b[1];
});
coordinate.forEach((i) => {
  result += `${i[0]} ${i[1]}\n`;
});
 
console.log(result);