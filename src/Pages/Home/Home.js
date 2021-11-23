import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import RecipeList from '../../Components/RecipePreview/RecipeList';
import Select from "@material-ui/core/Select";
import { FormControl, InputAdornment, Input,InputLabel, MenuItem } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import SearchRecipes from "../../Components/Search/SearchRecipes";
import {FILTERS} from "../../Constants/states"
export default function Home() {
    const recipes = useSelector((state) => state.recipes);
    const [labels, setLabels] = useState([]);
    const [shownRecipes,setShown] = useState(recipes)
    const allRecipes = useSelector(state=>state.allRecipes);
    const [search, setSearch] = useState("");
    

 
const handleChangeSearch = (e) => {
  setSearch(e.target.value);
  setShown(SearchRecipes(recipes, labels, e.target.value));
};

    const handleChange = (e)=>{
        setLabels(e.target.value);
        setShown(SearchRecipes(recipes, e.target.value, search));
    }
    useEffect(()=>{
        setShown(SearchRecipes(recipes, labels, search));
    },[recipes])

    return (
      <div>
        <div style={{ padding: "10px", display: "flex" }}>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            onChange={handleChangeSearch}
            value={search}
          />
          <div style={{ paddingLeft: "10px" }}>
            <InputLabel id="demo-simple-select-label">
              Select Filters
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              placeholder="Select Filters"
              value={labels}
              multiple
              onChange={handleChange}
            >
              {FILTERS.map((l) => (
                <MenuItem value={l}>{l}</MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <p>My Recipes</p>
        <RecipeList recipes={shownRecipes} />
        <hr />
        <p>Other People's Recipes</p>
        <RecipeList
          recipes={SearchRecipes(
            allRecipes.filter((rec) => !recipes.find((re) => re.id === rec.id)),
            labels,
            search
          )}
        />
      </div>
    );
}
