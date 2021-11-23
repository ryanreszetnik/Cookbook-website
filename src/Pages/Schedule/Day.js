import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SmallPreview from '../../Components/RecipePreview/SmallPreview'

export default function Day({index}) {
    const recipes = useSelector(state=>state.recipes)
    const dayName = useSelector(state=>state.schedule.days[index].name) 
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
    const [snacks, setSnacks] = useState([]);


    const displayMealTime = (name,recipes)=>{
        return (
          <div className="meal">
            <h4>{name}</h4>
            {recipes.map((rec) => (
              <SmallPreview recipe={rec} />
            ))}
          </div>
        );
    }

    return (
      <div className="day">
        <h2>{dayName}</h2>
        {displayMealTime("Breakfast", breakfast)}
        {displayMealTime("Lunch", lunch)}
        {displayMealTime("Dinner", dinner)}
        {displayMealTime("Snacks", snacks)}
      </div>
    );
}
