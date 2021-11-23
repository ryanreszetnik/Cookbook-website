import { Button } from '@material-ui/core'
import { UsbOutlined } from '@material-ui/icons';
import React from 'react'
import CreateIngredient from './CreateIngredient';
import {v4} from "uuid";

export default function CreateIngredients({ingredients,add,remove,update}) {
    const addNew = ()=>{
        const newIng = {
            name:"",
            quantity:""
        }
        add(newIng);
    }
    return (
      <div>
        <Button onClick={addNew}>Add Ingredient</Button>
        {ingredients.map((ing,index) => (
          <CreateIngredient ingredient={ing} index={index} setIngredient={update} remove ={remove} />
        ))}
      </div>
    );
}
