/******************
 * Pig Game
 */

let scores, roundScore, activePlayer, gamePlaying, prevRoll, playerName1, playerName2;

init();

document.querySelector('.btn-refresh').addEventListener('click', () => {
    document.querySelector('.btn-refresh').style.display = 'none';
    document.querySelector('.person-1').value = '';
    document.querySelector('.person-2').value = '';
})

document.querySelector('.btn-name').addEventListener('click', () => {
    document.querySelector('.btn-refresh').style.display = 'block';

    // document.querySelector('.btn-name').textContent = 'refresh';
    const randomName1 = document.querySelector('.person-1').value;
    const randomName2 = document.querySelector('.person-2').value;
    let inputName;
    playerName1 = document.getElementById('name-0').textContent = 'Player 1';
    playerName2 = document.getElementById('name-1').textContent = 'Player 2';
    
    // to input first name
    if (randomName1) {
        inputName = randomName1;
    } else{
        randomName1 = playerName1;
    }

    if (inputName === randomName1) {
        document.querySelector('#name-0').textContent = randomName1;
    } else{
        document.querySelector('#name-0').textContent = playerName1;
    }
    

    // next player inputs second name
    if (randomName2) {
        inputName = randomName2;
    } else{
        randomName2 = playerName2;
    }

    if (inputName === randomName2) {
        document.querySelector('#name-1').textContent = randomName2;
    } else{
        document.querySelector('#name-1').textContent = playerName2;
    }

})

    // function for the 'role-dice' button
document.querySelector('.btn-roll').addEventListener('click', () => {
    
    document.querySelector('.btn-name').style.display = 'none';
    
    if (gamePlaying) {
        // 1. random number
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
    
        // 2. display result
        document.querySelector('.dice1').style.display = 'block';
        document.querySelector('.dice2').style.display = 'block';
        document.querySelector('.dice1').src = '/images/dice-' + dice1 + '.png';
        document.querySelector('.dice2').src = '/images/dice-' + dice2 + '.png';
    
        // 3. update the round score IF the rolled numbers was NOT a 1
        if (dice1 !== 1 && dice2 !==1) {
            // Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();
        }

    }

})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add  current score to GLOBAL score
            scores[activePlayer] += roundScore;
    
        // Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            const input = document.querySelector('.score-input').value;
            let winningScore;

            if (input) {
                winningScore = input;
            } else {
                winningScore = 100;
            }
    
        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('player-winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
                // Next player
                nextPlayer();
        }
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
     
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
        // to make the dice images not apear at first
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.btn-name').style.display = 'block';
    // document.querySelector('.btn-name').textContent = 'refresh';

    document.querySelector('.btn-refresh').style.display = 'block';

    document.querySelector('.score-input').value = '';

    // document.querySelector('.person-1').value = '';
    // document.querySelector('.person-2').value = '';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('player-winner');
    document.querySelector('.player-1-panel').classList.remove('player-winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

//  A state variable tells us the condition of a system


/*
MY 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row, after that, it's the next player's turn. (Hints: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in javascript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.) 
*/

































