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

document.querySelector('.check').addEventListener('click', function() {
    const guess =Number(document.querySelector('.guess').value)
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!'
    }
    if ( guess === secretNumber ) {
        document.querySelector('.message').textContent = '🎉 Corect number';
        document.querySelector('.highscore').textContent = score;
        // document.body.style.backgroundColor = 'red';
        document.querySelector('.number').textContent =secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if ( guess > secretNumber) {
        if ( score > 1) {
            document.querySelector('.message').textContent = '📈 Too High!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🔥 You Lose!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if ( score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🔥 You Lose!'
            document.querySelector('.score').textContent = 0;
        }
    }
})


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
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent ='?';
    // document.querySelector('.highscore').textContent = 0;
    // const number = document.querySelector('.number');
    // number.style.width = '15rem';
    // number.textContent ='?';

}) 