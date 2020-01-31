import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import MediaItem from "../components/MediaItem";
import { init } from "../store/actions";

const TvShowsStyled = styled.div`
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

function TvShows() {
  const dispatch = useDispatch();
  const tvshows = useSelector(state => state.tvshows.tvshows);

  useEffect(() => {
    dispatch(init("tvshows"));
  }, [dispatch]);
  // discover.movies.forEach(el => console.log(el));

  return (
    <TvShowsStyled>
      <div className="navigation">Search</div>
      <div className="view">
        {tvshows.map(tvshow => (
          <MediaItem key={tvshow.id} mediaType="tv" media={tvshow} />
        ))}
      </div>
    </TvShowsStyled>
  );
}

export default TvShows;
