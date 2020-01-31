import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import MediaItem from "../components/MediaItem";
import { init } from "../store/actions";

const TrendingStyled = styled.div`
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

function Trending() {
  const dispatch = useDispatch();
  const trending = useSelector(state => state.trending.trending);

  useEffect(() => {
    dispatch(init("trending"));
  }, [dispatch]);

  return (
    <TrendingStyled>
      <div className="navigation">Search</div>
      <div className="view">
        {trending.map(movie => (
          <MediaItem key={movie.id} media={movie} />
        ))}
      </div>
    </TrendingStyled>
  );
}

export default Trending;
