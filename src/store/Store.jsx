import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/ItemsSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export { store };
