import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPlaceDetails } from "../API/mapAPI";

export const fetchPlaceDetailsAsync = createAsyncThunk(
  "searchResults/fetchPlaceDetails",
  async (req) => {
    try {
      const response = await getPlaceDetails(req);
      console.log(response);
      return JSON.stringify(response);
    } catch (err) {}
  }
);
