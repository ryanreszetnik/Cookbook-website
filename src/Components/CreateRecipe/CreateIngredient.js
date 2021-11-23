import { Button, Input } from '@material-ui/core'
import React, { useState } from 'react'

export default function CreateIngredient({ingredient,index,setIngredient,remove}) {
    
    const updateIngredient=(field, event)=>{
        const newIngredient = {
            ...ingredient,[field]:event.target.value
        }
        setIngredient(newIngredient,index)
    }

    return (
      <div style={{display:"flex"}}>
        <Input placeholder="Quantity" value={ingredient.quantity} onChange={(e)=>updateIngredient("quantity",e)}/>
        <Input placeholder="Ingredient" value={ingredient.name} onChange={(e)=>updateIngredient("name",e)}/>
        <Button onClick={()=>remove(index)}>Delete</Button>
      </div>
    );
}
