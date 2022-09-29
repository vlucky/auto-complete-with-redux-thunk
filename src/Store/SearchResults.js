import { createSlice } from "@reduxjs/toolkit";
import { fetchPlaceDetailsAsync } from "./fetchPlaceDetailsAsync";
import { fetchPlacePredictionsAsync } from "./fetchPlacePredictionsAsync";

const initialState = {
  results: [],
  geometry: null,
};

export const searchResultSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    addSearchResult: (state, action) => {
      state.results = action.payload;
    },
    addGeometry: (state, action) => {
      state.geometry = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPlaceDetailsAsync.fulfilled, (state, action) => {
      console.log("PAYLOAD:", action.payload);
      state.geometry = action.payload;
    });

    builder.addCase(fetchPlacePredictionsAsync.fulfilled, (state, action) => {
      console.log("PAYLOAD:", action.payload);
      state.results = action.payload;
    });
  },
});

//Action creaters
export const { addSearchResult, addGeometry } = searchResultSlice.actions;

export default searchResultSlice.reducer;
