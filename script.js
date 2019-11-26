const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const displayDrinkName = document.getElementById("output-name");
const displayImage = document.getElementById("output-img");
const displayDrinkIngredients = document.getElementById("output-ingredients");
const displayInstructions = document.getElementById("output-instruct");

// wait for button click to run function
document.getElementById("api-btn").addEventListener("click", getDrink);

function getDrink() {
  fetch(url)
    .then(result => {
      return result.json();
    })

    .then(result => {
      const drink = result.drinks[0];
      const keys = Object.keys(drink);
      const ingredients = keys
        .map(key => {
          if (key.indexOf("strIngredient") === 0) {
            return drink[key];
          }
        })
        .filter(value => {
          return value;
        });

      const measure = keys
        .map(key => {
          if (key.indexOf('strMeasure') === 0) {
            return drink[key]
          };
        }).filter(value => {
          return value
        });

      const header = document.createElement('h2');
      const drinkName = document.createTextNode(drink.strDrink);
      header.appendChild(drinkName);
      displayDrinkName.appendChild(header);

      ingredients.forEach((ingredient, index) => {
        const para = document.createElement("p");
        const newIngredient = document.createTextNode(ingredient + ': ' + measure[index]);
        para.appendChild(newIngredient);
        displayDrinkIngredients.appendChild(para);
      });

      const instructions = document.createElement('p');
      const drinkInstructions = document.createTextNode(drink.strInstructions);
      instructions.appendChild(drinkInstructions);
      displayInstructions.appendChild(instructions);
    })

    .catch(error => {
      console.log(error);
    });
}