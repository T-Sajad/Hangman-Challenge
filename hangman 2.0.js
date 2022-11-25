alert('welcome to hangman');

let Dictionary = ['Dinosaur','monkey','rhino','parrot','gorilla','donkey'];

let maxwWrong = 6;
let mistakes = 0;
let answer= [];
let cheese = 0

    
let  hangManQuestion = Dictionary[Math.floor(Math.random() * Dictionary.length)];
    
for (let i = 0; i < hangManQuestion.length; i++) {
    answer[i] = "_"
}
        
let restofLetters = hangManQuestion.length;
        
while (restofLetters > 0) {
    alert(answer.join(" "));
    let remain = maxwWrong -- 
    let userguess = prompt(`Guess a letter and you have ${remain} guesses.`);
    if (userguess == mistakes ) {
        alert("Gave over")
        break;
        
        } 
        else if (userguess.length !== 1) {
        alert("Please enter a single letter.");
        } 
        else {
            for (let j = 0; j < hangManQuestion.length; j++) {
                if (hangManQuestion[j] === userguess) {
                 answer[j] = userguess;
                 restofLetters--;
                 
                }
                }
                }
}
alert(answer.join(" "));
alert(` The answer was ${hangManQuestion}`);


// generateWord = (wordBank) => {
//     let randNum = Math.floor(Math.random() * wordBank.length);
//     return wordBank[randNum];
// }

// const printInfo = (correctAttempts, attemptsRemaining, attempted, bp) => {  
//     console.log(' |‾‾‾‾‾|');
//     console.log(` ${bp[0]}     |`);
//     console.log(`${bp[2]}${bp[1]}${bp[3]}    |`);
//     console.log(` ${bp[4]}${bp[5]}    |`);
//     console.log(' ‾‾‾‾‾‾');
//     console.log('\n')
    
//     console.log(correctAttempts.join(''));
//     console.log('Attempts remaining: ' + attemptsRemaining);
//     console.log('Incorrect letters: ' + attempted.join(''));
// }

// const checkUserInput = (userInput, correctAttempts, attempted) => {
//     if (!userInput) {
//         alert('Please enter a valid value');
//         return false;
//     } else if(userInput.length > 1) {
//         alert('Please enter a single letter');
//         return false;
//     } else if(correctAttempts.includes(userInput + ' ') || attempted.includes(userInput + ' ')) {
//         alert('You have already attempted: ' + userInput);
//         return false;
//     }

//     return true;
// }

// const checkGuess = (userInput, wordToGuess, correctAttempts, attemptsRemaining, attempted, all, bp) => {
//     let correctGuess = false;

//     for (let i = 0; i < wordToGuess.length; i++) {
//         if(wordToGuess[i] === userInput) {
//             correctAttempts[i] = userInput + ' ';
//             correctGuess = true;
//         }
//     }

//     if (!correctGuess) {
//         attemptsRemaining--;
//         attempted.push(userInput + ' ');
//         bp[5 - attemptsRemaining] = all[5 - attemptsRemaining]
//     }

//     return {bp: bp, attemptsRemaining: attemptsRemaining};
// }

// const checkGameOver = (correctAttempts, attemptsRemaining, wordToGuess) => {
//     let tempAttempts = correctAttempts.map(letter => letter[0])

//     if (attemptsRemaining == 0) {
//         alert('You have lost the game');
//         return true;
//     } else if(tempAttempts.join('') === wordToGuess) {
//         alert("You win");
//         return true;
//     }

//     return false;
// }

// const main = () => {
//     const wordBank = ["JAZZ", "AWKWARD", "ZINC", "VEX"];
//     let wordToGuess = generateWord(wordBank);
//     let attemptsRemaining = 6;
//     let correctAttempts = new Array(wordToGuess.length).fill('_ '); //JAZZ =  _ _ _ _ 
//     let attempted = [];
//     let all = ['o', '|', '-', '-', '/', '\\'];
//     let bp = [' ', ' ', ' ', ' ', ' ', ' '];

//     alert('Welcome to hangman');
//     while(attemptsRemaining > 0) {
//         printInfo(correctAttempts, attemptsRemaining, attempted, bp);
//         console.log(attemptsRemaining);
//         let userInput = prompt("Please enter a letter").toUpperCase();

//         if (!checkUserInput(userInput, correctAttempts, attempted)) {
//             continue;
//         }

//         let output = checkGuess(userInput, wordToGuess, correctAttempts, attemptsRemaining, attempted, all, bp);
        
//         attemptsRemaining = output.attemptsRemaining;
//         bp = output.bp

//         if(checkGameOver(correctAttempts, attemptsRemaining, wordToGuess)) {
//             printInfo(correctAttempts, attemptsRemaining, attempted, bp);
//             return;
//         }
//     }
// }

// main();