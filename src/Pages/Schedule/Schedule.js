import { Input, InputAdornment, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import RecipePreview from '../../Components/RecipePreview/RecipePreview';
import SmallPreview from '../../Components/RecipePreview/SmallPreview';
import SearchRecipes from '../../Components/Search/SearchRecipes';
import Day from './Day'
import './Schedule.css'
const labelOptions = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack",
  "Single Serving",
  "Meal Prep",
  "Quick Meal",
];

const names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
export default function Schedule() {
     const recipes = useSelector((state) => state.recipes);
     const [labels, setLabels] = useState([]);
     const [shownRecipes, setShown] = useState([]);
     const [search, setSearch] = useState("");

     const handleChangeSearch = (e)=>{
        setSearch(e.target.value)
     }
     const handleChange=(e)=>{
         setLabels(e.target.value)
     }

    useEffect(() => {
        setShown(SearchRecipes(recipes,labels,search))
    }, [recipes,labels,search]);

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
              {labelOptions.map((l) => (
                <MenuItem value={l}>{l}</MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div style={{display:"flex"}}>
                {recipes.map((recipe) => (
          <SmallPreview recipe={recipe} key={`sklsdfajksldf${recipe.id}`} />
        ))}
        </div>

        <div className="day-container">
          {names.map((n, i) => {
            return <Day index={i} />;
          })}
        </div>
      </div>
    );
}
