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
