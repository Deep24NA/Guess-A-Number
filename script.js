// For Random Number
const min = 0;
const max = 100;
let Rnumber = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(Rnumber);


// Cheeze Uthana Shuru kro pRaaa
const userNumber = document.querySelector('#Number');
const submit = document.querySelector('#submit');
const guessSlot = document.querySelector('#pGuess');
const remaining = document.querySelector('#remain')
const LowHigh = document.querySelector('.lowhigh')
let scoreBoard = document.querySelector('.scoreBorad')



// creating elements
let newButton = document.createElement('Button');


let prevGuess = [];
let numGuess = 1;

let playGame = true;


// working
if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();

        // console.log(Rnumber);
        validateGuess(parseInt(userNumber.value));
        // console.log(typeof userNumber);
        // console.log(parseInt(userNumber.value));

    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please Enter a Valid Number`)
    } else if (guess < 1) {
        alert(`Please Enter a Number Greater than 1`)
    } else if (guess > 100) {
        alert(`Please Enter a NUmber Lesser than 100`)
    } else {
        if (numGuess >= 10) {
            displayMessage(`Game Over , Random Number Was : ${guess}`);
            handleScoreBorad(guess);
            endGame();

        } else {
            prevGuess.push(userNumber);
            checkGuess(guess)
            handleScoreBorad(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess < Rnumber) {
        displayMessage(`You're too Low`);
    } else if (guess === Rnumber) {
        displayMessage(`You guessed it Right Guess Number is : ${Rnumber}`)
        endGame();
    } else if (guess > Rnumber) {
        displayMessage(`You're too High`);
    }
}

function displayMessage(message) {
    LowHigh.innerHTML = `<h2>${message}</h2>`
}

function handleScoreBorad(guess) {
    userNumber.value = '';
    guessSlot.innerHTML += `${guess} | `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function endGame() {
    userNumber.value = '';
    userNumber.setAttribute('disabled', '');
    submit.setAttribute('disabled' , '')
    newButton.classList.add('button');
    newButton.setAttribute('id' , 'newG')
    newButton.innerHTML = `Start New Game`;
    scoreBoard.appendChild(newButton)
    playGame = false;
    newGame();
}

function newGame() {
    const newGme = document.querySelector('#newG');
    newGme.addEventListener('click', (e) => {
        // console.log(e)
        Rnumber = Math.floor(Math.random() * (max - min + 1) + min);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userNumber.removeAttribute('disabled');
        scoreBoard.removeChild(newButton);
        LowHigh.innerHTML = '';
        playGame = true;
    })


}


