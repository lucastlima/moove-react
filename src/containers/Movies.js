import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import MediaItem from "../components/MediaItem";
import { init } from "../store/actions";

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
    padding-bottom: 6rem;
  }
`;

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(init("movies"));
  }, [dispatch]);

  // discover.movies.forEach(el => console.log(el));

  return (
    <MoviesStyled>
      <div className="navigation">Search</div>
      <div className="view">
        {movies.map(movie => (
          <MediaItem key={movie.id} mediaType="movie" media={movie} />
        ))}
      </div>
    </MoviesStyled>
  );
}

export default Movies;
