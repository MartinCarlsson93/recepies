import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Recipe() {
  const [recipeData, setRecipeData] = useState({});
  const router = useRouter();
  const { recipes } = router.query;
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipes}`;
  const fetchData = () => {
    if (recipes) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.meals[0]);
          setRecipeData(data.meals[0]);
        });
    }
  };
  useEffect(fetchData, [recipes]);
  return (
    <>
      <div className="pages">
        <h1>{recipeData.strMeal}</h1>
        <img src={recipeData.strMealThumb} alt="" />
        <div className="instructions">
          <ol>
            {recipeData.strInstructions &&
              recipeData.strInstructions
                .trim()
                .split(".")
                .map((el, index) => {
                  if (el) {
                    return <li key={index}>{el}.</li>;
                  } else {
                    return;
                  }
                })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default Recipe;
