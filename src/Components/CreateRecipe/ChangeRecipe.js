import React, { useState } from 'react'
import {
  FormControl,
  InputAdornment,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Chip
} from "@material-ui/core";
import CreateIngredients from './CreateIngredients';
import CreateSteps from './CreateSteps';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { ADD_RECIPE } from '../../Constants/actions';
import {LABELS} from '../../Constants/states'

const initialSteps = [""];
const initialIngredients = [{ id: v4(), name: "", quantity: "" }];

export default function ChangeRecipe({recipe,submitName,onSubmit}) {
    const dispatch = useDispatch()
    const [labels, setLabels] = useState(recipe?recipe.labels?recipe.labels:[]:[]);
    const [name,setName]=useState(recipe?recipe.name:"");
    const [description,setDescription]=useState(recipe?recipe.description?recipe.description:"":"");
    const [ingredients,setIngredients] = useState(recipe?recipe.ingredients:initialIngredients);
    const [steps, setSteps] = useState(recipe?recipe.steps:initialSteps);

    const createRecipe=()=>{
        const rec={
            id:recipe?recipe.id:v4(),
            ingredients,steps,labels,name,description
        }
        onSubmit(rec);
        //console.log(rec)
       
    }
    // const addLabel=(label)=>{
    //   setLabels(labs=>[...labs,label])
    // }
    // const removeLabel=(label)=>{
    //   setLabels(labs=>labs.filter(l=>l!==label))
    // }

    const addStep=(step)=>{
        setSteps(old=>[...old,step])
    }
    const removeStep=(index)=>{
        setSteps(old=>old.filter((val,ind)=>ind!==index))
    }
    const updateStep =(step,index)=>{
        setSteps(old=>old.map((val,ind)=>{
            if(ind===index){
                return step
            }
            return val
        }))
    }
    const handleChange = (event) => {
      setLabels(event.target.value);
    };
    const addIngredient = (ingredient) => {
      setIngredients((state) => [...state, ingredient]);
    };
    const removeIngredient=(index)=>{
        setIngredients((state) => state.filter((ing,ind) => ind !== index));
    }
    const updateIngredient = (ingredient,index) => {
      setIngredients((state) =>
        state.map((ing,ind) => {
          if (ind === index) {
              return ingredient
          }
          return ing;
        })
      );
    };
    return (
      <div style={{ display: "inline" }}>
        <div>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputLabel>Labels</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={labels}
            multiple
            onChange={handleChange}
          >
            {LABELS.map((l) => (
              <MenuItem value={l}>{l}</MenuItem>
            ))}
          </Select>
        </div>

        <Input
          fullWidth={true}
          placeholder="Description/Notes"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <hr />
        <h2>Ingredient List</h2>
        <CreateIngredients
          ingredients={ingredients}
          add={addIngredient}
          remove={removeIngredient}
          update={updateIngredient}
        />
        <hr />
        <h2>Step List</h2>
        <CreateSteps
          steps={steps}
          add={addStep}
          remove={removeStep}
          update={updateStep}
        />
        <hr />
        <Button onClick={createRecipe}>{submitName}</Button>
      </div>
    );
}
