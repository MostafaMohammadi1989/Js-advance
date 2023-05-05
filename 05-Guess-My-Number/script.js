'use strict';

/*
// const h1 = 'meisam'
// console.log(document.querySelector('.message').textContent = 'meisam mohammadi')

document.querySelector('.message').textContent = '🎉 Corect number';
document.querySelector('.number').textContent = 21;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

const secretNumber = document.querySelector('.number').textContent =  Math.trunc(Math.random()* 20 + 1)

let score = 20;

 document.querySelector('.check').addEventListener('click', function() {
    const guess =Number(document.querySelector('.guess').value)
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!'
    }
    if ( guess === secretNumber ) {
        document.querySelector('.message').textContent = '🎉 Corect number';
        document.querySelector('.highscore').textContent = score;
        document.body.style.backgroundColor = 'red'
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