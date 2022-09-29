import { configureStore } from "@reduxjs/toolkit";

import searchResultsReducer from "./SearchResults";

const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
  },
});

export default store;
