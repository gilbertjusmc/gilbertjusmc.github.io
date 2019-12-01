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
      console.log(drink);
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
    let ingred = document.getElementById("ingredients");
    let instruct = document.getElementById("instructions");
    drinkTitle.parentNode.removeChild(drinkTitle);
    ingred.parentNode.removeChild(ingred);
    instruct.parentNode.removeChild(instruct);
  })
);

//TODO play around with the code below.
// function zip(arrays) {
//   return arrays[0].map(function(_,i){
//       return arrays.map(function(array){return array[i]})
//   });
// }
// var getDrink = async function () {
// let result = await fetch(url)
// await console.log(result)
// let drink = result.drinks[0];
//     let keys = Object.keys(drink);
//     let ingredients = keys
//       .map(key => {
//         if (key.indexOf("strIngredient") === 0) {
//           return drink[key];
//         }
//       })
//       .filter(value => {
//         return value;
//       });
//     let measure = keys
//       .map(key => {
//         if (key.indexOf('strMeasure') === 0) {
//           return drink[key]
//         };
//       }).filter(value => {
//         return value
//       });
//       let pairedIngredients = zip(ingredients, measure)
// return [drink.strdrink, pairedIngredients, drink.instructions]
// }
// getDrink().then(res => {
// displayDrinkIngredients.innerHTML = res[0]
// displayDrinkIngredients.innerHTML = //Figure it output
// displayInstructions.innerHTML = res[2]
// })
// Benjamin Winchester 7:40 PM
// zip([1,2,3],[4,5,6])
// returns
// [[1,4],[2,5],[3,6]]
// Steve Clark 7:41 PM
// let newArr = [(...arr1, ...arr2)]
// Benjamin Winchester 7:45 PM
// function zip(arrays) {
//   return arrays[0].map(function(_,i){
//       return arrays.map(function(array){return array[i]})
//   });
// }
// var getDrink = async function () {
// let result = await fetch(url)
// await console.log(result)
// let drink = result.drinks[0];
//     let keys = Object.keys(drink);
//     let ingredients = keys
//       .map(key => {
//         if (key.indexOf("strIngredient") === 0) {
//           return drink[key];
//         }
//       })
//       .filter(value => {
//         return value;
//       });
//     let measure = keys
//       .map(key => {
//         if (key.indexOf('strMeasure') === 0) {
//           return drink[key]
//         };
//       }).filter(value => {
//         return value
//       });
//       let pairedIngredients = zip(ingredients, measure)
// return [drink.strdrink, pairedIngredients, drink.instructions]
// }
// getDrink().then(res => {
// let ingredient
// displayDrinkIngredients.innerHTML = ""
// res[1].forEach(pair, index) => {
//   ingredient = document.createTextNode("p")
//   ingredient.innerHTML = `${pair[0]}: ${pair[1]}`
//   displayDrinkIngredients.appendChild(ingredient)
// }
// displayDrinkName.innerHTML = res[0]
// displayInstructions.innerHTML = res[2]
// })
