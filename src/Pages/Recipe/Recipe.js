import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import Ingredients from './Ingredients';
import Steps from './Steps';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function Recipe() {
    let { id } = useParams();
    const own = useSelector(state=>state.recipes.find(recipe=>recipe.id===id));
    const recipe = useSelector((state) =>
        state.allRecipes.find((recipe) => recipe.id === id)
    );
    
    
   
    // const recipe = {title:"test"}
    return (
      <div>
          {recipe?<div>
        <div style={{ display: "flex" }}>
          <h1>{recipe.name}</h1>

          {own ? (
            <Link to={`/recipe/${id}/edit`} style={{ textDecoration: "none" }}>
              <Button>Edit</Button>
            </Link>
          ) : (
            <Link to={`/recipe/${id}/copy`} style={{ textDecoration: "none" }}>
              <Button>Copy</Button>
            </Link>
          )}
        </div>
        <p>{`Labels: ${JSON.stringify(recipe.labels)
          .replaceAll("[", "")
          .replaceAll("]", "")
          .replaceAll('"', "")
          .replaceAll(",", ", ")}`}</p>
        <p>{recipe.description}</p>
        <Ingredients ingredients={recipe.ingredients} />
        <Steps steps={recipe.steps} />
        </div>:<div>Not found</div>}
      </div>
    );
}
