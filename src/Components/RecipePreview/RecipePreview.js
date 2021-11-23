import React from 'react'
import './RecipePreview.css'
import { CardContent,Card,CardActions,Button } from '@material-ui/core';
import {Link} from "react-router-dom"

export default function RecipePreview({recipe}) {
    
    return (
      <Card className="card">
        <CardContent className="content">
          <h3 className="card-title">{recipe.name}</h3>
        </CardContent>
        <CardActions className="actions">
          <Link to={`/recipe/${recipe.id}`} style={{textDecoration:"none"}}>
            <Button size="small">View Recipe</Button>
          </Link>
        </CardActions>
      </Card>
    );
}
