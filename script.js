const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const displayDrinkName = document.getElementById("output-name");
const displayDrinkIngredients = document.getElementById("output-ingredients");
// const displayDrinkMeasure = document.getElementById("output-measure");
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
      // console.log(keys)
      const ingredients = keys
        .map(key => {
          if (key.indexOf("strIngredient") === 0) {
            return drink[key];
          }
          // console.log('key', key)
        })
        .filter(value => {
          return value;
        });

      const measure = keys
        .map(key => {
          if (key.indexOf('strMeasure') === 0) {
            return drink[key]
          };
          // console.log('key', key)
        }).filter(value => {
          return value
        });
      // console.log('Measure = ', measure)
      // console.log('ingredients = ', ingredients)

      //TODO use forEach to display to site
      //TODO output.append(textNode ingredient and measure)

      const header = document.createElement('h2');
      const drinkName = document.createTextNode(drink.strDrink)
      header.appendChild(drinkName);
      displayDrinkName.appendChild(header)


      ingredients.forEach((ingredient, index) => {
        // console.log(ingredient, measure[index]);
        const para = document.createElement("p")
        const newIngredient = document.createTextNode(ingredient + ':' + measure[index])
        para.appendChild(newIngredient)
        displayDrinkIngredients.appendChild(para);
      });


    })

    // ingredient.append(document.createTextNode())


    .catch(err => {
      console.log(err);
    });
}

//TODO append name and instructions
//TODO create array of ingredients , measure loop through ingredients