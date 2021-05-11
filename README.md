# Nom Nom Microservice

Nom nom microservice is a food data aggregator. It receives an array of food names and it returns an aggregate of estimated nutritional information. 

To run nom nom service locally you `git clone` 
Once you have the local build, navigate to the root folder and run `node server.js` 
This will spin up the server in your localhost (Port 3000 by default)

To use, make a GET request to endpoint https://pure-journey-77953.herokuapp.com/
  - /help returns basic info about the microservice
  - /food/{name of food} returns json with nutritional information about the food from Spoonacular API


