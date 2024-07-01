import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContactThunk, deleteThunk, fetchDataThunk } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  // selectors: {
  //   selectContacts: (state) => state.contacts.items,
  //   selectIsLoading: (state) => state.isLoading,
  //   selectIsError: (state) => state.isError,
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })

      .addMatcher(
        isAnyOf(
          fetchDataThunk.fulfilled,
          addContactThunk.fulfilled,
          deleteThunk.fulfilled
        ),
        (state, action) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchDataThunk.pending,
          addContactThunk.pending,
          deleteThunk.pending
        ),
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchDataThunk.rejected,
          addContactThunk.rejected,
          deleteThunk.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
// export const { selectContacts, selectIsError, selectIsLoading } =
//   slice.selectors;
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;
