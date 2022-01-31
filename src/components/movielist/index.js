import React, {useEffect, useState} from "react";
import styled from 'styled-components';

import {MovieItem} from '../movieitem';
import {useSelector} from "react-redux";
import * as RS from "reactstrap";

export const MovieList = () => {

  const discoverData = useSelector((state) => state?.discoverData);
  const genreData = useSelector((state) => state?.genreData);
  const [movies, setMovies] = useState([]);
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    discoverData && setMovies(Object.values(discoverData));
  }, [discoverData]);

  useEffect(() => {
    genreData && setGenresList(Object.values(genreData));
  }, [genreData]);

  {/* Finish the MovieItem component and use it here to display the movie results */}
    return <RS.Container>
      {movies.length > 0 && genresList.length > 0 && movies.map(movie =>
        <MovieItem movie={movie} genreList={genresList} key={movie.id}/>
      )}
    </RS.Container>
}
