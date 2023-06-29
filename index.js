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
    if (question === `h` && secretNumber > randomNum) {
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
minN = 1;
maxN = 100;
let y = Math.floor(Math.random() * (maxN - minN + 1) + minN);




// Computer asking us to guess
let humanAnswer = await ask('Your turn! Guess my number! 1-100: \n')
// After we give our guess, the computer will answer one of three ways:
while(y !== humanAnswer) {
  // If the answer needs to be lower, computer will ask to go lower
  if (y < humanAnswer){
    humanAnswer = await ask(`Go lower for me.. `)} 
    // If its higher, computer will asks to go higher.
  else if (y > humanAnswer){
      humanAnswer = await ask(`Try going higher.. `);} 
   // If we got it right, we go to the yay
  else {(y === humanAnswer)
    break
  }
  }

console.log(`You did it!!`)

// let minN = 1;
// let maxN = 100;
// let randomNum = Math.round((maxN + minN) / 2);

// stops the start function from running, "exits"
  process.exit();
};
