let userName = '';

userName = 'Jane' ? `Hello ${name}` : 'Hello';

let userQuestion = 'Question the user wants to ask the magic number'
console.log(userQuestion)

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber)
let eightBall = '';

if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
}

console.log(eightBall);