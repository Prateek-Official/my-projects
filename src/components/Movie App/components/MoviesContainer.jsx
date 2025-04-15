import { BASE_URL, API_KEY } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

const MovieContainer = () => {

    const dispatch = useDispatch()

  const fetchMovies = async () => {
    const movieText = "harry";
    const response = await fetch(
      `${BASE_URL}?apiKey=${API_KEY}&s=${movieText}&type=movie`
    );
    const data = await response.json();
    console.log(data);
    dispatch(add(data))
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <div>Movie Container</div>;
};

export default MovieContainer;
