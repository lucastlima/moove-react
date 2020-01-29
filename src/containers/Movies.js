import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MovieItem from "../components/MovieItem";

const MoviesStyled = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  padding: 1rem;

  .navigation {
    display: flex;
    width: 100%;
    height: 4rem;
  }

  .view {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    padding-bottom: 2rem;
  }
`;

function Movies() {
  const movies = useSelector(state => state.movies.movies);

  // discover.movies.forEach(el => console.log(el));

  return (
    <MoviesStyled>
      <div className="navigation">Search</div>
      <div className="view">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </MoviesStyled>
  );
}

export default Movies;
