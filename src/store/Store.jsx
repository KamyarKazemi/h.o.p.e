import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/ItemsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { namesApi } from "./apis/Api";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    [namesApi.reducerPath]: namesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(namesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export { useFetchNames } from "./apis/Api";
export * from "./slices/thunks/FetchThunk";
