import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from 'redux/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers:(builder) => {
     return builder.addCase(fetchContacts.pending, (state) => {state.isLoading = true})
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, ((state, action) => {
        
        state.error = action.payload;
      }))
      .addCase(addContacts.pending,(state)=>{
        state.isLoading = true
      })
      .addCase(addContacts.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addContacts.rejected,(state,action)=>{
        state.isLoading = false;
        state.error=action.payload;

      })
      .addCase(deleteContacts.pending,(state)=>{
        state.isLoading = true
      })
      .addCase(deleteContacts.fulfilled,(state,action)=>{
        state.isLoading=false;
        const index = state.items.findIndex(({id})=>id===action.payload.id);
        state.items.splice(index,1)
        state.error=null;
      })
      .addCase(deleteContacts.rejected,(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(
        isAnyOf(
          (fetchContacts.fulfilled,fetchContacts.rejected),(state) => 
            {state.isLoading = false}
        )
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
