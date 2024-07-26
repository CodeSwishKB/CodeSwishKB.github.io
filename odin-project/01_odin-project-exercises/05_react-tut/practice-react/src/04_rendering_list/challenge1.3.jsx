// TODO:
// Challenge 3 of 4: Extracting a list item component 
// This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. Where do you place the outer key and why?

import { recipes } from "./datas";


function Recipe({ name, ingredients }) {
  return (
    <>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(item => 
          <li>{item}</li>
        )}
      </ul>
    </>
  )
}

export default function RecipeListExtract() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe}/>
      )}
    </div>)
}

