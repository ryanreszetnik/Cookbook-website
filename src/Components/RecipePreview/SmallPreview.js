import React from "react";
import "./RecipePreview.css";
import { CardContent, Card, CardActions, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { START_DRAG_RECIPE } from "../../Constants/actions";

export default function SmallPreview({ recipe,index,meal }) {
    const dispatch = useDispatch();
    const startDrag=()=>{
        dispatch({
          type: START_DRAG_RECIPE,
          payload: { item: recipe.id, index, meal },
        });
        //START_DRAG_RECIPE://{item:"itemId",index:0,meal:"breakfast"}
    }
  return (
    <div className="small-card" draggable onDragStart={startDrag}>
      <div className="small-content">
        <p className="small-card-title">{recipe.name}</p>
      </div>
      <div className="actions">
        {/* <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
            <Button size="small">View</Button>
          </Link> */}
      </div>
    </div>
  );
}
