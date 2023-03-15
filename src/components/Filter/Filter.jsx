import React from 'react';
import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputChangeHandler = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
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
