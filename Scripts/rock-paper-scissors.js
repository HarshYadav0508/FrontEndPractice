let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Tie: 0
};

updateScoreElement();

function resetScore () {
score.Wins = 0;
score.Losses = 0;
score.Tie = 0;
localStorage.removeItem('score');
updateScoreElement();
}
function playGame(playerMove) {

const computermove = pickcomputermove();
let result = '';

if (playerMove === 'Scissors') {
        if (computermove === 'Rock') {
        result = 'You Lose';
    } else if (computermove === 'Paper') {
        result = 'You Win';
    } else if (computermove === 'Scissors') {
        result = 'Tie';
    }
}
if (playerMove === 'Paper') {
        if (computermove === 'Rock') {
        result = 'You Win';
    } else if (computermove === 'Paper') {
        result = 'Tie';
    } else if (computermove === 'Scissors') {
        result = 'You Lose';
    } 
}
if (playerMove === 'Rock') {
        if (computermove === 'Rock') {
        result = 'Tie';
    } else if (computermove === 'Paper') {
        result = 'You Lose';
    } else if (computermove === 'Scissors') {
        result = 'You Win';
    }
}

if (result === 'You Win') {
    score.Wins += 1;
} else if (result === 'You Lose') {
    score.Losses += 1;
}else if (result === 'Tie') {
    score.Tie += 1;
}

localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.moves').innerHTML = `You 
<img src="Images/${playerMove}-emoji.png" class="move-icon-2">  
<img src="Images/${computermove}-emoji.png" class="move-icon-2">
Computer`;

updateScoreElement();
}


function updateScoreElement () {
document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins} Losses: ${score.Losses} Tie: ${score.Tie}`;
}

function pickcomputermove() {
const RandomNo = Math.random();
let computermove = '';

if (RandomNo >= 0 && RandomNo < 1/3) {
    computermove = 'Rock';
} else if (RandomNo >= 1/3 && RandomNo < 2/3) {
    computermove = 'Paper';
} else if (RandomNo >= 2/3 && RandomNo < 1) {
    computermove = 'Scissors';
}  

return computermove;
}