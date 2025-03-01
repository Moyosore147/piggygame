
//My coding challenge

/*******************
 * Object and Method
 */

/*
                ASSIGNMENT NO.1
1. for each of them, create an object with properties of their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 
*/

/*
var john = {
    fullName: 'John Smith',
    mass: 45,
    height: 7.14,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var Mike = {
    fullName: 'Mike Miles',
    mass: 50,
    height: 7.54,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height); //saving the bmi to the object
        return this.bmi; //return from the object
    }
}

if (john.calcBMI() > Mike.calcBMI()) {
    console.log(john.fullName + ' has greater BMI with ' + john.bmi + '.');
} else if(Mike.calcBMI() > john.calcBMI()) {
    console.log(Mike.fullName + ' has greater BMI with ' + Mike.bmi + '.');
} 
else {
    console.log('They have the same BMI');
}
*/

/************************
 * Loops and Itaretion
 */

//ASSIGNMENT 2

/*
So, remember the tip calculator that we created in another challenge. Let's now create a more advanced version using everything that we learned up until this point. 
So this time, John and his family went to five different restaurants. And the bills were 124, 48, 268, 180, and 42 dollars. And again, John likes to tip 20 percent of the bill, when it is less than 50 dollars, 50 percent if it's between 50 and 200, and 10 percent if the bill is more than 200 dollars. Alright? So, implement a tip calculator using objects and loops this time. 

So here are the steps for doing that, in order to help you. So, first create an object with an array for the bill values. Then, add a method to calculate the tip, and this method should of course include a loop, to iterate over all the paid bills, and to do the tip calculations.

Then, as an output, you should again create two arrays. One containing all the paid tips, and two, containing all the final paid amount.
So again, the bill plus the tip. Alright?
And a hint that I have to give you here is that you can start with two empty arrays as properties, and then fill them up in the loop. Okay?

So an empty array is just like this here. And you can start with two empty arrays, one for just number one, so all the tips, and then two, for all the final paid amounts.
So start with these two as empty arrays and then in a loop, you can fill them up. Alright?
So that is already a lot of work, but after that, I even have like a step two for you. So, to even take it to the next level.

And that is, that Mark's family also went on a holiday. And they are going to four different restaurants. 
And the bill that they paid were 77, 375, 110, and 45 dollars. And Mark has a slightly different rules when it comes to tipping. So he likes to tip 20 percent, if the bill is less than 100 dollars, 10 percent, when the bill is between 100 and 300 dollars, and 25 percent if the bill is more than 300 dollars. Okay?

So again, that doesn't make much sense maybe, but that's just again, to make it a bit more exciting, and to make these two tipping functions different for each of the persons. Okay?
So, I want you to implement the same functionality as before, but this time of course, using Mark's tipping rules. Then create a function, and I don't mean a method. So, like an outside function to calculate the average of a given array of tips. And here I have to give you another hint, because up until this point, we never did anything like this. Okay and so I give you a hint here to calculate the average. And that is that you should loop over the array, and in each iteration, store the current sum in a variable which starts from zero. Then after you have the sum of the array,then you'll simply divide it by the number of elements in it. Okay? So that's the formula for calculating averages.
So if that's a bit too difficult for you, then you can just stop maybe after point five. Okay?
But I would like you to try out, to calculate the average, alright? So that's here on number seven, so you use the function that you created in number six to actually calculate the average for both families. And then you'll log to the console which family paid the highest tips on average.
*/

/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips = [];
        this.finalValue = [];

        for (let i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills;
            var tip = this.tips

            if (bill < 50) {
                percentage = .2;
            } else if (bill <= 50 && bill < 200) {
                percentage = .5;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + tip;
        }
    }
}

john.calcTip();
console.log(john);


*/





/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips = [];
        this.finalValues = [];

        for (let i = 0; i < this.bills.length; i++) {
            
            var percentage;
            var bill = this.bills[i];
            var tip = this.tips[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .5;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + tip;
        }
    }
}

john.calcTip();
console.log(john);
*/





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
        document.querySelector('.dice1').src = 'dice-' + dice1 + '.png';
        document.querySelector('.dice2').src = 'dice-' + dice2 + '.png';
    
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

































