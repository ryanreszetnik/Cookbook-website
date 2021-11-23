import React from 'react'

export default function Steps({steps}) {
     return (
       <div>
         <p>{`Steps ${steps.length}`}</p>
         <ul>
           {steps.map((step) => {
             return <li>{step}</li>;
           })}
         </ul>
       </div>
     );
}
