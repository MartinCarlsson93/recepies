import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import RecipeCard from "./recipeCard";

export default function Main() {
  const [recipes, setRecipes] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const fetchData = () => {
    alphabet.forEach((letter) =>
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter.toLowerCase()}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.meals && Array.isArray(data.meals)) {
            setRecipes((prev) => [...prev, ...data.meals]);
            setFilteredRecipes((prev) => [...prev, ...data.meals]);
          } else if (data.meals) {
            setRecipes((prev) => [...prev, data.meals]);
            setFilteredRecipes((prev) => [...prev, data.meals]);
          }
        })
    );
  };
  useEffect(fetchData, []);
  // const shuffledRecipes = recipes.sort((a, b) => 0.5 - Math.random());

  // setFilteredRecipes(shuffledRecipes);
  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    if (textInput) {
      const filtered = filteredRecipes.filter((recipe) => {
        return recipe.strMeal.toLowerCase().includes(textInput.toLowerCase());
      });
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [textInput]);

  return (
    <>
      <h1 className="header">All recipes</h1>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search recipe"
          onChange={handleChange}
        />
      </div>

      <main className="wrapper">
        {filteredRecipes.length &&
          filteredRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              name={recipe.strMeal}
              img={recipe.strMealThumb}
              id={recipe.idMeal}
            ></RecipeCard>
          ))}
      </main>
    </>
  );
}
