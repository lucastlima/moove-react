import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MediaItem from "../components/MediaItem";
import MediaGrid from "../components/MediaGrid";
import { init } from "../store/actions";

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(init("movies"));
  }, [dispatch]);

  // discover.movies.forEach(el => console.log(el));

  return (
    <MediaGrid>
      {movies.map(movie => (
        <MediaItem key={movie.id} mediaType="movie" media={movie} />
      ))}
    </MediaGrid>
  );
}

export default Movies;
