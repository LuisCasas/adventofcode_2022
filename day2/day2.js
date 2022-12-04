const fs = require('fs');

const data = fs.readFileSync('input_17', 'utf8');
let array = data.split(/\r?\n/);
let total = 0;

// Part 1

let opponentVal = {
    'A': 1,
    'B': 2,
    'C': 3
}

let myVal = {
    'X': 1,
    'Y': 2,
    'Z': 3
}

const getPoints = (a, b) => {

    let firstPoint = myVal[b];

    let secondPoint = 0;

    if (opponentVal[a] === myVal[b]) {
        secondPoint = 3;
    } else if (
        (myVal[b] === 1 && opponentVal[a] === 3) ||
        (myVal[b] === 2 && opponentVal[a] === 1) ||
        (myVal[b] === 3 && opponentVal[a] === 2)
    ) {
        secondPoint = 6;
    }

    let result = firstPoint + secondPoint;
    //    console.log(result);

    return result;
}

array.map((line) => {

    //  console.log(line)
    let values = line.split(' ');
    //    console.log(values[0])
    let points = getPoints(values[0], values[1]);

    total += points;
});

// Result
console.log(total);

//=============================================================================
// Part 2

// reset total
total = 0;

const matrix = (a, b) => {

    if (b === 'win') {
        if (a === 'A') {
            return 2;
        }

        if (a === 'B') {
            return 3;
        }

        if (a === 'C') {
            return 1;
        }
    }

    if (b === 'lose') {
        if (a === 'A') {
            return 3;
        }

        if (a === 'B') {
            return 1;
        }

        if (a === 'C') {
            return 2;
        }
    }
}

const match = (a, b) => {

    let firstPoint = 0;
    let secondPoint = 0;

    // lose
    if (b === 'X') {
        firstPoint = matrix(a, 'lose');
    }

    // draw:
    if (b === 'Y') {
        //same points
        firstPoint = opponentVal[a];
        secondPoint = 3;
    }

    // win:
    if (b === 'Z') {
        firstPoint = matrix(a, 'win');
        secondPoint = 6;
    }

    let result = firstPoint + secondPoint;
    //   console.log(result)
    return result;
}

array.map((line) => {

    //  console.log(line)
    let values = line.split(' ');
    //    console.log(values[0])
    let points = match(values[0], values[1]);

    total += points;
});

console.log(total);

