import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies", // Used to get the values when you use useSelector. See options below for better understanding
  initialState: {
    movies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    getAllMovies: (state) => {
      return state.movies;
    },
  },
});

export const { addMovies, getAllMovies } = movieSlice.actions;
{
  /*
  OPTION 1: 
  in UserSlice.js
  export const getMovies = (state) => state.movies.movies
                                                |--------> this is coming from "name" key

    const movies = useSelector(getMovies)


  OPTION 2: //preferred
    const movies = useSelector((store) => store.movies.movies)
*/
}
export default movieSlice.reducer;
