import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Poster from "./Poster";

const MovieItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: var(--shadowOne);
  padding: 0.5rem 0.5rem 0.2rem;
  background: rgba(255, 255, 255, 0.04);
  transition: all 0.3s ease-in;

  & .movie-info {
    display: flex;
    padding: 0.5rem;
    min-height: 2rem;

    justify-content: center;
    transition: all 0.3s ease-in;

    h4 {
      font-size: 1.2rem;
      width: 90%;
      text-align: center;
    }
  }

  & .movie-img {
    display: flex;
    width: ${props => (props.flex ? "18rem" : null)};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
`;

function MovieItem({ movie, min }) {
  return (
    <StyledNavLink
      key={movie.id}
      to={`/movie/${movie.id}`}
      location={{ key: movie.id }}
    >
      <MovieItemStyled>
        <Poster
          min={min}
          src={movie.poster_path}
          size="w500"
          alt={movie.title}
        />
        <div className="movie-info">
          <h4>{movie.title}</h4>
        </div>
      </MovieItemStyled>
    </StyledNavLink>
  );
}

export default MovieItem;
