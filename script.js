const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const displayDrinkName = document.getElementById("output-name");
const displayImage = document.getElementById("output-img");
const displayDrinkIngredients = document.getElementById("output-ingredients");
const displayInstructions = document.getElementById("output-instruct");
const button = document.getElementById("api-btn");

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
          if (key.indexOf("strMeasure") === 0) {
            return drink[key];
          }
        })
        .filter(value => {
          return value;
        });

      const header = document.createElement("h2");
      // this is to setup a rest
      header.setAttribute("id", "drinkTitle");
      const drinkName = document.createTextNode(drink.strDrink);
      header.appendChild(drinkName);
      displayDrinkName.appendChild(header);

      ingredients.forEach((ingredient, index) => {
        const para = document.createElement("p");
        // this is to setup a rest
        para.setAttribute("id", "ingredients");
        const newIngredient = document.createTextNode(
          ingredient + ": " + measure[index]
        );
        para.appendChild(newIngredient);
        displayDrinkIngredients.appendChild(para);
      });

      const instructions = document.createElement("p");
      // this is to setup a rest
      instructions.setAttribute("id", "instructions");
      const drinkInstructions = document.createTextNode(drink.strInstructions);
      instructions.appendChild(drinkInstructions);
      displayInstructions.appendChild(instructions);
    })

    .catch(error => {
      console.log(error);
    });
}
// window.onload = getDrink();
button.addEventListener(
  "click",
  (reset = () => {
    let drinkTitle = document.getElementById("drinkTitle");
    let ingred = document.getElementById("output-ingredients");
    let instruct = document.getElementById("instructions");
    while (ingred.hasChildNodes()) {
      ingred.removeChild(ingred.firstChild);
    };
    drinkTitle.parentNode.removeChild(drinkTitle);
    instruct.parentNode.removeChild(instruct);
  })
);