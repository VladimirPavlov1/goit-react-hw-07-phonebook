import axios  from 'axios';
import {  createAsyncThunk } from '@reduxjs/toolkit';

// {isCancel, AxiosError}


axios.defaults.baseURL = 'https://6409875d6ecd4f9e18b35e8e.mockapi.io';

export const fetchContacts  = createAsyncThunk("contacts/fetchAll",async (_,thunkApi)=>{
   try {
    const response = await axios.get('/contacts');
    console.log(response)
    return response.data;
   
   } catch (error) {
    return thunkApi.rejectWithValue(error.message)
    
   }
})