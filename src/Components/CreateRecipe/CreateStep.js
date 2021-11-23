import { Button, Input } from '@material-ui/core';
import React from 'react'

export default function CreateStep({ step, setStep, remove, index }) {
  return (
    <div style={{ display: "flex" }}>
      <Input
        fullWidth={true}
        placeholder="Step"
        value={step}
        onChange={(e) => setStep(e.target.value,index)}
      />

      <Button onClick={() => remove(index)}>Delete</Button>
    </div>
  );
}
