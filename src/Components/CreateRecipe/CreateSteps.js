import { Button } from '@material-ui/core';
import React from 'react'
import CreateStep from './CreateStep';

export default function CreateSteps({ steps, add, remove, update }) {
  
  return (
    <div>
      <Button onClick={()=>add("")}>Add Step</Button>
      {steps.map((step,index) => (
        <CreateStep
          step={step}
          index={index}
          setStep={update}
          remove={remove}
          key={`STEP${step.id}`}
        />
      ))}
    </div>
  );
}
