'use strict';

/*
// const h1 = 'meisam'
// console.log(document.querySelector('.message').textContent = 'meisam mohammadi')

document.querySelector('.message').textContent = '🎉 Corect number';
document.querySelector('.number').textContent = 21;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/


let secretNumber = Math.trunc(Math.random()* 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}
const number = function(num) {
    document.querySelector('.number').textContent = num
}

const numberWidth = function(numwidth) {
    document.querySelector('.number').style.width = numwidth
}
const bgBody = function(bgColor) {
    document.querySelector('body').style.backgroundColor = bgColor;
}
const scoreRate = function(num) {
    document.querySelector('.score').textContent = num;
}
document.querySelector('.check').addEventListener('click', function() {
    const guess =Number(document.querySelector('.guess').value)
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No Number!';
        displayMessage('⛔ No Number!')
    } else if ( guess === secretNumber ) {
        // document.querySelector('.message').textContent = '🎉 Corect number';
        // document.querySelector('.number').textContent =secretNumber;
        // document.querySelector('body').style.backgroundColor = '#60b347';
        // document.querySelector('.number').style.width = '30rem';
        displayMessage('🎉 Corect number')
        number(secretNumber)
        bgBody('#60b347')
        numberWidth('30rem')

        if ( score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if ( score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            // document.querySelector('.score').textContent = score;
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            scoreRate(score)
        } else {
            // document.querySelector('.message').textContent = '🔥 You Lose!';
            // document.querySelector('.score').textContent = 0;
            displayMessage('🔥 You Lose!')
            scoreRate(0)
        }
    }
})
// }
//     else if ( guess > secretNumber) {
//         if ( score > 1) {
//             document.querySelector('.message').textContent = '📈 Too High!'
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '🔥 You Lose!';
//             document.querySelector('.score').textContent = 0;
//         }
//     } else if (guess < secretNumber) {
//         if ( score > 1) {
//             document.querySelector('.message').textContent = '📉 Too Low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '🔥 You Lose!'
//             document.querySelector('.score').textContent = 0;
//         }
//     }



/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20)+ 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    // document.querySelector('.score').textContent = score;
    // document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.number').textContent ='?';
    displayMessage('Start guessing...')
    scoreRate(score)
    numberWidth('15rem')
    document.querySelector('.guess').value = '';
    bgBody('#222')
    number('?')
    // document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.highscore').textContent = 0;
    // const number = document.querySelector('.number');
    // number.style.width = '15rem';
    // number.textContent ='?';

}) 

