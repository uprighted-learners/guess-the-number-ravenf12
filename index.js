// Imports readline and allows us to do input in and out 
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
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")

  async function number() {
    return Math.floor(Math.random() * max);
    let results = number
  }


  
  // let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
async function secret() {
  let secretNumber = await ask (What did you choose?);
}
async function yesNo() {
  let YN = await ask ( (answer === Y || answer === Y)){
    console.log("Hell Yea!")
  }
}


  // console.log('You entered: ' + secretNumber);
async function number() {
  return Math.floor(Math.random() * max);
}
  // Now try and complete the program.


// stops the start function from running, "exits"
  process.exit();
}
