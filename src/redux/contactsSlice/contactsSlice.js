import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from 'redux/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    return builder

      .addCase(fetchContacts.fulfilled, (state, action) => {

        state.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
       
        state.items.push(action.payload);

      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        
        const index = state.items.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.items.splice(index, 1);

      })
      .addMatcher(
        isAnyOf(fetchContacts.fulfilled,
          fetchContacts.rejected,
          addContacts.fulfilled,
          addContacts.rejected,
          deleteContacts.fulfilled,
          deleteContacts.rejected),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchContacts.pending,
          addContacts.pending,
          deleteContacts.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchContacts.fulfilled,
          addContacts.fulfilled,
          deleteContacts.fulfilled),
        state => { state.error = null }

      )
      .addMatcher(
        isAnyOf(fetchContacts.rejected,
          addContacts.rejected,
          deleteContacts.rejected),
        (state, action) => {

          state.error = action.payload
        }
      )

  },
});

export const contactsReducer = contactsSlice.reducer;
