import React from 'react'

export default function Ingredients({ingredients}) {
    return (
      <div>
        <p>{`Ingredients ${ingredients.length}`}</p>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li
                key={`${ingredient.quantity}  ${ingredient.name}`}
              >{`${ingredient.quantity}  ${ingredient.name}`}</li>
            );
          })}
        </ul>
      </div>
    );
}
//