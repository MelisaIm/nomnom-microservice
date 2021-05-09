const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;
const searchURL = 'https://api.spoonacular.com/food/ingredients/search?query=';

module.exports = {
    getIngredientData: function(req, res, next) {
        fetch(`${searchURL}&apiKey=${apiKey}`).then(res => res.json())
        .then(json => res.send(json))
        .catch(err => console.error(err));

    }
}