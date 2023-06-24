// Imports readline and allows us to do input in and out 
const { AsyncLocalStorage } = require('async_hooks');
const { normalize } = require('path');
const { exit, nextTick } = require('process');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

// Ask function that takes in text and returns and resolves a promise
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

// ! DO NOT TOUCH CODE ABOVE THIS LINE

// Async start function being invoked
start();


// The function that starts the whole game
async function start() {
  //  Letting the numbers come through for the computer to guess
  let minN = 1;
  let maxN = 100;
  let randomNum = Math.round((maxN + minN) / 2);

// 
  let secretNumber = await ask('What is your secret number? \n') // Asking the player their number - X
console.log(`You entered: ` + `${secretNumber}`); // Tells player what they've answered. - X


let answer = await ask(`Is your number ${randomNum}? Y/N \n`); // Guessing the player number - X
while (secretNumber != randomNum){
  if (secretNumber === randomNum){
    // break up the code:
    break
    // Asking the question
  } else {
    let question = await ask (`Is it (h)igher or (l)ower?`)
    // if it's higher and it's the truth, do this:
    if (question === `h` && secretNumber < randomNum) {
      minN = randomNum + 1;
      randomNum = Math.round((maxN + minN) / 2);
      // Once we figure out if we are higher, computer guesses again.
      let answer = await ask(`Is your number ${randomNum}? Y/N \n`);
      // If we got it right
      if (answer === `Y` && secretNumber === randomNum) {
        break
      } 
    } else {
      // IF it's lower:
      maxN = randomNum - 1;
      randomNum = Math.round((maxN + minN) / 2);
      // Guessing again:
      let answer = await ask(`Is your number ${randomNum}? Y/N \n`);
      if (answer === `Y` && secretNumber === randomNum) {
        break
      }
    }
  }
}
// If the computer guesses correctly:
console.log(`Yay! I did it`) 

// Now the computer thinks of a number:
let y = Math.floor(Math.random(maxN + minN) / 2 );
let humanAnswer;

// Computer asking us to guess
let human  = await ask('Your turn! Guess my number! 1-100: \n')

// After we give our guess, the computer will answer one of three ways:
while(y != human) {
  // If the human guesses right, go to congrats
  if (humanAnswer === y) {
   break
  }
  // If the answer needs to be higher, computer will ask to go higher
  else {(humanAnswer < y) 
    let human = await ask(`Go higher for me..`);
    // If its lower, computer will asks to fo lower.
    if (humanAnswer > y) {
      let human = await ask(`Try going lower..`);
    }

    // If we got it right, we go to the yay
    if (humanAnswer === y){
      break
    }
  }
};
console.log(`You did it!!`)

// let minN = 1;
// let maxN = 100;
// let randomNum = Math.round((maxN + minN) / 2);

// stops the start function from running, "exits"
  process.exit();
}

