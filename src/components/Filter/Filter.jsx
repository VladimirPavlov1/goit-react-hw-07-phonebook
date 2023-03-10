import React from 'react';
import { Input, Label } from './Filter.styled';



export const Filter = () => {
 

  const inputChangeHandler = event => {
    const { value } = event.target;
   
  };

  return (
    <div>
      <Label>
        Find contact by name
        <Input onChange={inputChangeHandler} type="text" name="filter" />
      </Label>
    </div>
  );
};
