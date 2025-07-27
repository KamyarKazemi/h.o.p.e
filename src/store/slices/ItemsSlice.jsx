import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./thunks/FetchThunk";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    value: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    handleInput(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { handleInput } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
