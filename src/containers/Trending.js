import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import { StyledNavLink } from "../components/styledComponents";

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
  const trending = useSelector(state => state.trending.trending);
  const { pathname } = useLocation();

  return (
    <TrendingStyled>
      <div className="navigation">Search</div>
      <div className="view">
        {trending.map(movie => (
          <StyledNavLink
            key={movie.id}
            to={{ pathname: `${pathname}/${movie.id}`, data: movie }}
          >
            <MovieItem key={movie.id} movie={movie} />
          </StyledNavLink>
        ))}
      </div>
    </TrendingStyled>
  );
}

export default Trending;
