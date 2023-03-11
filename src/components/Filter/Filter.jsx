import React from 'react';
import { Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';


export const Filter = () => {
 
  const filter = useSelector(selectFilter)
  console.log(filter)
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
