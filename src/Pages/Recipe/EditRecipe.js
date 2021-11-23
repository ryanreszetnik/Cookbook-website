import React from 'react'
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ChangeRecipe from '../../Components/CreateRecipe/ChangeRecipe';
import { UPDATE_RECIPE, DELETE_RECIPE } from "../../Constants/actions";
import {API} from "aws-amplify";
import { Button } from '@material-ui/core';
import { deleteRecipie, updateRecipie } from '../../Endpoints/recipeEndpoints';
export default function EditRecipe() {
     let { id } = useParams();
     const dispatch = useDispatch();
     const history = useHistory();
     const recipe = useSelector((state) =>
       state.recipes.find((recipe) => recipe.id === id)
     );
     console.log(recipe)
     const onSubmit = async(recipe)=>{
         await updateRecipie(recipe);
         
        dispatch({ type: UPDATE_RECIPE, payload: recipe });
        history.push(`/recipe/${id}`)
     }
     const deleteRecipe=async()=>{
         await deleteRecipie(recipe)
        
         dispatch({ type: DELETE_RECIPE, payload: recipe });
         history.push(`/`);
     }
    return (
        <div>
            <ChangeRecipe recipe={recipe} submitName = "Update" onSubmit={onSubmit}/>
            <Button onClick={deleteRecipe}>Delete Recipe</Button>
        </div>
    )
}
