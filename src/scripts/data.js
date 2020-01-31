const data = {

    getGames: function(username, month, year) {
        return fetch(`https://api.chess.com/pub/player/${username}/games/${year}/${month}`)
            .then(response => response.json());
    }
}

export default data;