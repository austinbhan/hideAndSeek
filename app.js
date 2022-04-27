// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function handleGuess(correctSpot, userGuess) {
    // reset the styleface   
    treeContainer.classList.remove('face');
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    let losses = totalGuesses - correctGuesses;
    // Try This Code
    if (userGuess === correctSpot) {
        winsEl.textContent = correctGuesses += 1;
        totalEl.textContent = totalGuesses += 1;
    } else {
        lossesEl.textContent = losses += 1;
        totalEl.textContent = totalGuesses += 1;
    }

    // then increment the guessesface    totalEl.textContent = totalGuesses += 1;

    // then grab the appropriate container element for the correct guess from the DOM

    // then add the face class to that element so that the face shows up

    // "if the choice is correct"
            //treeContainer.classList.add('face');, but how to make it a face on the winner?

    // then if the user guess is correct, increment the correct guesses

    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}
