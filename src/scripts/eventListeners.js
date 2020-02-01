import data from './data.js'
import gameComponent from './gameComponent.js'

export function submitEventListener () {
    // Get reference to submit button
    const getGamesButton = document.querySelector('.submit__button');

    getGamesButton.addEventListener('click', (event) => {
        console.log(event);
        // Get reference to the input values
        const usernameInput = document.querySelector('.username__input').value;
        const yearInput = document.querySelector('.year__input').value;
        const monthInput = document.querySelector('.month__input').value;

        // Get reference to games table
        const gamesTable = document.querySelector('.game__table')

        data.getGames(usernameInput, monthInput, yearInput)
            .then(response => {
                response.games.forEach(game => {
                    // Write a function that takes in a game object and returns an html string
                    const gameRowHtml = gameComponent.createGameHTML(game);
                    gamesTable.innerHTML += gameRowHtml
                })
            })
        
    })
}





