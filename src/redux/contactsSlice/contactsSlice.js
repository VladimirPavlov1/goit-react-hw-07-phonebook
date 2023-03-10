import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers:(builder) => {
     return builder.addCase(fetchContacts.pending, (state) => state.isLoading = true)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null;
        state.items[action.payload] = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        
        state.error = action.payload;
      })
      .addMatcher(
        isAnyOf(
          (fetchContacts.fulfilled,fetchContacts.rejected),((state) => 
            state.isLoading = false)
        )
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
