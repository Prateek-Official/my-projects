import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import itemsReducer from "./itemsSlice(TODO_SLICE)";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    items: itemsReducer,
  },
});

export default store;
