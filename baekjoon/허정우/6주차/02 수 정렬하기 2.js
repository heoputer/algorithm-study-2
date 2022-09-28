// 내장 메소드 sort() 사용한 코드
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
input.shift();

let results = '';
input.sort((a, b) => a - b).forEach(num => (results += `${num}\n`));

console.log(results);

// 병합 정렬을 이용한 코드
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
input.shift();

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
       result.push(arr1[i]);
       i++;
  	} else {
      	result.push(arr2[j]);
        j++;
    }
  }
  while(i < arr1.length) {
    result.push(arr1[i])
    i++;
  }
  while(j < arr2.length) {
    result.push(arr2[j])
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let result = "";
mergeSort(input).forEach(el => result += el + "\n");
console.log(result);