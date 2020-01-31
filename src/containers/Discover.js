import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import MediaItem from "../components/MediaItem";
import { init } from "../store/actions";

const DiscoverStyled = styled.div`
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

function Discover() {
  const dispatch = useDispatch();

  const discover = useSelector(state => state.discover);

  useEffect(() => {
    dispatch(init("discover"));
  }, [dispatch]);

  // discover.movies.forEach(el => console.log(el));

  return (
    <DiscoverStyled>
      <div className="navigation">Search</div>
      <div className="view">
        {discover.movies.map(movie => (
          <MediaItem mediaType="movie" key={movie.id} media={movie} />
        ))}
      </div>
    </DiscoverStyled>
  );
}

export default Discover;
