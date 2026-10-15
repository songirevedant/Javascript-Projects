let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

updateScoreLM();

function pickComputerMove() {
    
     const randomNumber = (Math.random());
     let computerMove = '';

     if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
     } else if (randomNumber >= 2/3) {
        computerMove = 'paper';
     } else {
        computerMove = 'scissors';
     }

     console.log(computerMove);

     return computerMove; 
}

function playGame(playerMove) {
    
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove == 'rock') {

        if (computerMove === 'rock') {
            result = 'It is a Tie';
        }
        else if (computerMove === 'paper') {
            result = 'You lose';
        }
        else if (computerMove === 'scissors') {
            result = 'You Win';
        }

        if (result === 'You Win') {
            score.Wins += 1;
        } else if (result === 'You lose') {
            score.Losses += 1;
        } else if (result === 'It is a Tie') {
            score.Ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreLM();

        document.querySelector('.js-moves').innerHTML = `YOU
                            <img src = "${playerMove}-emoji.png" class = "move-icon"> vs
                            <img src = "${computerMove}-emoji.png" class = "move-icon">COMPUTER`;

        document.querySelector('.js-result').innerHTML = result;
    }

    else if (playerMove === 'paper') {

        if (computerMove === 'rock') {
            result = 'You Win';
        }
        else if (computerMove === 'paper') {
            result = 'It is a Tie';
        }
        else if (computerMove === 'scissors') {
            result = 'You lose';
        }

        if (result === 'You Win') {
            score.Wins += 1;
        } else if (result === 'You lose') {
            score.Losses += 1;
        } else if (result === 'It is a Tie') {
            score.Ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreLM();

        document.querySelector('.js-moves')
            .innerHTML = `YOU
                            <img src = "${playerMove}-emoji.png" class = "move-icon"> vs
                            <img src = "${computerMove}-emoji.png" class = "move-icon">COMPUTER`;

        document.querySelector('.js-result').innerHTML = result;
    }

    else if (playerMove == 'scissors') {

        if (computerMove === 'rock') {
            result = 'You lose';
        }
        else if (computerMove === 'paper') {
            result = 'You Win';
        }
        else if (computerMove === 'scissors') {
            result = 'It is a Tie';
        }

        if (result === 'You Win') {
            score.Wins += 1;
        } else if (result === 'You lose') {
            score.Losses += 1;
        } else if (result === 'It is a Tie') {
            score.Ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreLM();

        document.querySelector('.js-moves').innerHTML = `YOU
                            <img src = "${playerMove}-emoji.png" class = "move-icon"> vs
                            <img src = "${computerMove}-emoji.png" class = "move-icon">COMPUTER`;

        document.querySelector('.js-result').innerHTML = result;
    }
    
}

document.querySelector(`.js-rock-button`).addEventListener(`click`, () => {
    playGame(`rock`);
});

document.querySelector(`.js-paper-button`).addEventListener(`click`, () => {
    playGame(`paper`);
});

document.querySelector(`.js-scissors-button`).addEventListener(`click`, () => {
    playGame(`scissors`);
});

document.body.addEventListener(`keydown`, (event) => {
    if (event.key === `r`) {
        playGame(`rock`);
    } else if (event.key === `p`) {
        playGame(`paper`);
    } else if (event.key === `s`) {
        playGame(`scissors`);
    }
});

function updateScoreLM() {
    document.querySelector('.js-score').innerHTML =  `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

let isAutoPlaying = false;
let intervalId;

function autoplay() {
    if(!isAutoPlaying) {
        intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        document.querySelector('.auto-play-button').innerHTML = 'Stop';
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false
        document.querySelector('.auto-play-button').innerHTML = 'Auto-Play';
    }
}