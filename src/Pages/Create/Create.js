import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import ChangeRecipe from '../../Components/CreateRecipe/ChangeRecipe'
import { ADD_RECIPE } from '../../Constants/actions';
import {API}from "aws-amplify"
import { updateRecipie } from '../../Endpoints/recipeEndpoints';
import { useHistory } from 'react-router';



export default function Create() {
    const dispatch=useDispatch();
    const history = useHistory();
    const onSubmit = async(recipe)=>{
        await updateRecipie(recipe)
        dispatch({ type: ADD_RECIPE, payload: recipe });
        history.push(`/recipe/${recipe.id}`);
    }
    
    return <div>
        
        <ChangeRecipe submitName="Create" onSubmit={onSubmit}/>
    </div>
}
