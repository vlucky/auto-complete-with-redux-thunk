import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPlacePredictions } from "../API/mapAPI";

export const fetchPlacePredictionsAsync = createAsyncThunk(
  "searchResults/fetchPlacePredictions",
  async (req) => {
    try {
      const response = await getPlacePredictions(req);
      console.log(response);
      return response;
    } catch (err) {}
  }
);
