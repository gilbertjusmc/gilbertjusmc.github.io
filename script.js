/* //This was an assignment for VWC
setTimeout (function(){
    alert ("Welcome, you have been on my page for >8 seconds.");}, 8500);
*/

// wait for button click to run function
document.getElementById('api-btn').addEventListener('click', getDrink);

function getDrink() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

    .then(result => {
      return result.json()
    })

    .then(result => {
      // console.log(result.drinks[0])
      const drink = result.drinks[0];
      const keys = Object.keys(drink);
      // console.log(keys)
      const ingredients = keys.map(key => {
        if (key.indexOf('strIngredient') === 0) {
          return drink[key]
        };
        // console.log('key', key)
      }).filter(value => {
        return value
      });
      console.log('ingredients = ', ingredients)
    })

    .then(result => {
      // console.log(result.drinks[0])
      const drink = result.drinks[0];
      const keys = Object.keys(drink);
      // console.log(keys)
      const measure = keys.map(key => {
        if (key.indexOf('strMeasure') === 0) {
          return drink[key]
        };
        // console.log('key', key)
      }).filter(value => {
        return value
      });
      console.log('Measure = ', measure)
    })

  const output = document.querySelector('#output');
}

//TODO append name and instructions
//TODO create array of ingredients , measure loop through ingredients
//TODO use forEach to display to site
//TODO output.append(textNode ingredient and measure)