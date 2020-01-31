const inputContainer = document.querySelector('.inputs__form')

const dom = {

    // Populate index.html with input form for chess.com username, year, and month
    createForm: () => {
        const formHTML = `
            <fieldset>
                <label for="username">Chess.com Username</label>
                <input type="text" class="username__input">
                <label for="month">Month (MM)</label>
                <input type="text" class="month__input">
                <label for="year">Year (YYYY)</label>
                <input type="text" class="year__input">
                <button type="submit" class="submit__button">Get Games</button>
            <fieldset>
        `
        return formHTML
    },

    // Adds html string to the DOM
    addHTMLToDOM: (container, htmlString) => {
        container.innerHTML += htmlString;
    },





}

export default dom;