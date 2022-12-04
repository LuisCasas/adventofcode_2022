const fs = require('fs');

const data = fs.readFileSync('input_17', 'utf8');

// Part 1

let array = data.split(/\r?\n/);
let current = 0;
let maxVal = 0;

//array.map((val) => {

for (i = 0; i < array.length; i++) {

    if (array[i] === '') {
        if (current > maxVal) {
            maxVal = current;
        }

        current = 0;
    } else {
        newVal = Number(array[i]);
        current += newVal;
    }
}

// Result
console.log(maxVal);

//=====================================================================

// Part 2
let newArr = [];

let newVal = 0;
let c = 0;
current = 0;

//array.map((val) => {

for (i = 0; i < array.length; i++) {

    if (array[i] === '') {
        newArr[c] = current;
        c++;
        current = 0;

    } else {
        newVal = Number(array[i]);
        current += newVal;
    }
}

newArr.sort((a, b) => b - a);
//console.log(sortedArr);
let result = newArr[0] + newArr[1] + newArr[2];

// Part 2 result
console.log(result);