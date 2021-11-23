import React from 'react'
import RecipePreview from './RecipePreview';
import SmallPreview from "./SmallPreview";
import "./RecipePreview.css";
export default function RecipeList({recipes}) {
    return (
      <div className="list">
        {recipes.map((recipe) => (
          <RecipePreview recipe={recipe} key={`sklfajksldf${recipe.id}`} />
        ))}
      </div>
    );
}
