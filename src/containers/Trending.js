import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MediaItem from "../components/MediaItem";
import MediaGrid from "../components/MediaGrid";
import { init } from "../store/actions";

function Trending() {
  const dispatch = useDispatch();
  const trending = useSelector(state => state.trending.trending);

  useEffect(() => {
    dispatch(init("trending"));
  }, [dispatch]);

  return (
    <MediaGrid>
      {trending.map(movie => (
        <MediaItem key={movie.id} media={movie} />
      ))}
    </MediaGrid>
  );
}

export default Trending;
