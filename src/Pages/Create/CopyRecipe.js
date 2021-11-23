import React from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ChangeRecipe from "../../Components/CreateRecipe/ChangeRecipe";
import { UPDATE_RECIPE, DELETE_RECIPE, ADD_RECIPE } from "../../Constants/actions";
import { API } from "aws-amplify";
import { Button } from "@material-ui/core";
import { deleteRecipie, updateRecipie } from "../../Endpoints/recipeEndpoints";
import {v4} from "uuid";
export default function CopyRecipe() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const recipe = useSelector((state) =>
    state.allRecipes.find((recipe) => recipe.id === id)
  );
  console.log(recipe);
  const onSubmit = async (recipe) => {
    const newId = v4();
    recipe = { ...recipe, id: newId };
    await updateRecipie(recipe);
    dispatch({ type: ADD_RECIPE, payload: recipe });
    history.push(`/recipe/${newId}`);
  };

  return (
    <div>
      <ChangeRecipe recipe={recipe} submitName="Copy" onSubmit={onSubmit} />
    </div>
  );
}
