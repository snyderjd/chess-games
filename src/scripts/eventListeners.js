import data from './data.js'

export function submitEventListener () {
    // Get reference to submit button
    const getGamesButton = document.querySelector('.submit__button');

    getGamesButton.addEventListener('click', (event) => {
        console.log(event);
        // Get reference to the input values
        const usernameInput = document.querySelector('.username__input').value;
        const yearInput = document.querySelector('.year__input').value;
        const monthInput = document.querySelector('.month__input').value;

        console.log(usernameInput)
        console.log(yearInput)
        console.log(monthInput)

        // call function to get games from chess.com
        data.getGames(usernameInput, monthInput, yearInput)
            .then(parsedGames => {
                console.log(parsedGames)
            });
        
    })
}





