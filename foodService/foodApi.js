const fetch = require('node-fetch');
require('dotenv').config();
const apiKey = process.env.API_KEY;
const searchURL = 'https://api.spoonacular.com/food/ingredients/search?query=';
const ingredientURL = 'https://api.spoonacular.com/food/ingredients/';

module.exports = {
    getIngredientData: async function(req, res, next) {
        const response = await fetch(`${searchURL}${req.params.ingredient}&apiKey=${apiKey}&includeNutrition=true`);
        const foundItems = await response.json();
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        if (foundItems.results.length) {
            const data = await fetch(`${ingredientURL}${foundItems.results[0].id}/information?apiKey=${apiKey}&amount=1`);
            const ingredient = await data.json();
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            res.send(ingredient);    
        }
        else {
            res.send("No results. Try different query");
            }

    }
}