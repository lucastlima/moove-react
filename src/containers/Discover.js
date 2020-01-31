import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MediaItem from "../components/MediaItem";
import MediaGrid from "../components/MediaGrid";
import { init } from "../store/actions";

function Discover() {
  const dispatch = useDispatch();
  const discover = useSelector(state => state.discover);

  useEffect(() => {
    dispatch(init("discover"));
  }, [dispatch]);

  // discover.movies.forEach(el => console.log(el));

  return (
    <MediaGrid>
      {discover.movies.map(movie => (
        <MediaItem mediaType="movie" key={movie.id} media={movie} />
      ))}
    </MediaGrid>
  );
}

export default Discover;
