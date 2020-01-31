import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MediaItem from "../components/MediaItem";
import MediaGrid from "../components/MediaGrid";
import { init } from "../store/actions";

function TvShows() {
  const dispatch = useDispatch();
  const tvshows = useSelector(state => state.tvshows.tvshows);

  useEffect(() => {
    dispatch(init("tvshows"));
  }, [dispatch]);
  // discover.movies.forEach(el => console.log(el));

  return (
    <MediaGrid>
      {tvshows.map(tvshow => (
        <MediaItem key={tvshow.id} mediaType="tv" media={tvshow} />
      ))}
    </MediaGrid>
  );
}

export default TvShows;
