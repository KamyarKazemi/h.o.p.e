import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchItems = createAsyncThunk("items/fetch", async () => {
  const response = await axios.get("http://localhost:3005/items");

  await console.log(response.data);

  return response.data;
});

export { fetchItems };
