// Imports readline and allows us to do input in and out 
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
  // Intro game text 
  let minN = 1;
  let maxN = 100;
  let randomNum = Math.floor(Math.random() * maxN + minN);

// node filename.js  

// * Works pretty well.. Will run but immediately shuts down. If you take process.exit() away it lets you respond and gives console.log()
secretNumber()
async function secretNumber() {
  let secretNumber = await ask('What is your secret number? \n')
console.log(`You entered: ` + `${secretNumber}`);
};

// *Sometimes runs, sometimes doesn't idk. This is not the full project of course, this is me just testing stuff to see what works and what doesn't. If process.exit() is taken out, won't run this at all. If you comment out secretNumber() this works fine.
guessNum()
async function guessNum() {
  let Y = true;
  let N = false;
let guessNum = await ask(`Is your number ${randomNum}? Y/N \n`);
if (randomNum === Y, randomNum === secretNumber) 
console.log("Yay! I did it")
}
console.log(guessNum)
 // Now try and complete the program.


// stops the start function from running, "exits"
  process.exit();
}

