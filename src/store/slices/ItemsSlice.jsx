import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    value: "",
  },
  reducers: {
    handleInput(state, action) {
      state.value = action.payload;
    },
  },
});

export const { handleInput } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
