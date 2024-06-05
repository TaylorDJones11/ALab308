/// Fizz Buzz ////
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('Fizz Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

/// Prime Time ////

const n = 5;
let currentNumber = n + 1;
let isPrime = false;

while (true) {
  isPrime = true;

  // Check if currentNumber is prime
  if (currentNumber <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
      if (currentNumber % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  // If currentNumber is prime, print it and break the loop
  if (isPrime) {
    console.log(currentNumber);
    break;
  }

  currentNumber++;
}

/// Feeling Loopy ///

const csvData =
  'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

let cell = '';
let row = [];
let rows = [];

for (let i = 0; i < csvData.length; i++) {
  let char = csvData[i];

  if (char === ',') {
    row.push(cell);
    cell = '';
  } else if (char === '\n') {
    row.push(cell);
    rows.push(row);
    console.log(...row);
    row = [];
    cell = '';
  } else {
    cell += char;
  }
}
