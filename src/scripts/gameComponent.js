const gameComponent = {

    // Write a function that takes in a game json object and returns an html table row
    createGameHTML: function(game) {
        const newRowHtml = `
            <tr class="table__dataRow">
                <td>${game.url}</td>
                <td>${game.time_control}</td>
                <td>${this.convertDateTime(game.end_time)}</td>
                <td>${game.rated}</td>
                <td>${game.time_class}</td>
                <td>${game.white.rating}</td>
                <td>${game.white.username}</td>
                <td>${game.white.result}</td>
                <td>${game.black.rating}</td>
                <td>${game.black.username}</td>
                <td>${game.black.result}</td>
            </tr>
        `
        return newRowHtml
    },

    convertDateTime: function(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000)
        return date
    }
}

export default gameComponent;