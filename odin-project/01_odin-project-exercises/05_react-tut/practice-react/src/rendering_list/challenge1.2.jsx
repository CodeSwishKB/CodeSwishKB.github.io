// TODO:
// Challenge 2 of 4: Nested lists in one component 
// Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.

import { recipes } from "./datas"

export default function RecipeListChallenge() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div>

          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(rep =>
              <li>{rep}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
