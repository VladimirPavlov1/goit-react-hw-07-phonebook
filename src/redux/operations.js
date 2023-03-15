import axios  from 'axios';
import {  createAsyncThunk } from '@reduxjs/toolkit';





axios.defaults.baseURL = 'https://6409875d6ecd4f9e18b35e8e.mockapi.io';

export const fetchContacts  = createAsyncThunk("contacts/fetchAll",async (_,thunkApi)=>{
   try {
    const response = await axios.get('/contacts');
    
    return response.data;
   
   } catch (error) {
    return thunkApi.rejectWithValue(error.message)
    
   }
});

export const addContacts = createAsyncThunk("contacts/addContacts",async (text, thunkApi)=>{
   try {
      const response = await axios.post('/contacts',  text );

      return response.data;

   } catch (error) {
      return thunkApi.rejectWithValue(error.message);

   }
});

export const deleteContacts = createAsyncThunk("contacts/deleteContacts", async(contactId,thunkApi)=>{
   try {
      const response =await axios.delete(`/contacts/${contactId}`);
      return response.data;
   } catch (error) {
      return thunkApi.rejectWithValue(error.message)
   }
})
