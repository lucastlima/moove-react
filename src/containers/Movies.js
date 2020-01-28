import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MovieItem from "../components/MovieItem";

const StyledMovies = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  overflow: hidden;

  .movies-wrapper {
    display: flex;
    width: 100%;
    overflow-y: auto;
    height: min-content;

    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  }

  .section-nav {
    display: flex;
    width: 100%;
    height: 3rem;
    align-items: center;
    padding: 0 1rem;
    font-size: 1.4rem;
  }
`;

function Movies() {
  const movies = useSelector(state => state.movies);

  return (
    <StyledMovies>
      <div className="section-nav">
        <h4>TRENDING</h4>
      </div>
      <div className="movies-wrapper">
        {movies.trending.map(movie => (
          <MovieItem min={18} key={movie.id} movie={movie} />
        ))}
      </div>
    </StyledMovies>
  );
}

export default Movies;
